/**
 * Cloudariss admin provisioning CLI (create-only).
 *
 *   npm run admin:provision -- --help
 *
 * - Default run is a dry run. `--apply` is required to write.
 * - Existing accounts are never modified by provisioning.
 * - Password rotation is a separate, explicit `--rotate <ROLE> --apply` run that reads the
 *   new password from ADMIN_ROTATION_NEW_PASSWORD at runtime and revokes all of that admin's sessions.
 * - Connects via DIRECT_URL (Supabase direct connection), never the transaction pooler.
 * - Never prints passwords, hashes, or connection strings.
 */
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';
import {
  ProvisioningConfigError,
  ROTATION_PASSWORD_ENV,
  isPlaceholderEmail,
  parseAdminSlots,
  validatePasswordPolicy,
} from '../server/provisioning/config';
import { CliUsageError, USAGE, parseCliArgs } from '../server/provisioning/cliArgs';
import { provisionAdmins, rotateAdminPassword } from '../server/provisioning/provisionAdmins';

const EXIT_OK = 0;
const EXIT_ATTENTION = 1;
const EXIT_USAGE = 2;

const loadLocalEnv = () => {
  const envPath = resolve(process.cwd(), '.env');
  // Values already present in the process environment take precedence over the file.
  if (existsSync(envPath)) process.loadEnvFile(envPath);
};

const printRow = (role: string, email: string, status: string, detail?: string) => {
  console.log(`  ${role.padEnd(11)} ${email.padEnd(40)} ${status.padEnd(15)} ${detail ?? ''}`.trimEnd());
};

const runCheckConfig = (): number => {
  const slots = parseAdminSlots(process.env);
  let attention = false;
  console.log('Configuration check (no database access):');
  for (const slot of slots) {
    const notes: string[] = [];
    let slotNeedsAttention = false;
    if (isPlaceholderEmail(slot.email)) notes.push('placeholder email');
    if (!slot.initialPassword) {
      notes.push('no initial password (only needed if the account is missing)');
    } else {
      const problems = validatePasswordPolicy(slot.initialPassword, slot.email);
      if (problems.length > 0) {
        slotNeedsAttention = true;
        notes.push(`password ${problems.join('; ')}`);
      }
    }
    if (slotNeedsAttention) attention = true;
    printRow(slot.role, slot.email, slotNeedsAttention ? 'NEEDS_ATTENTION' : 'OK', notes.join(' | '));
  }
  return attention ? EXIT_ATTENTION : EXIT_OK;
};

const main = async (): Promise<number> => {
  let mode;
  try {
    mode = parseCliArgs(process.argv.slice(2));
  } catch (error) {
    if (error instanceof CliUsageError) {
      console.error(`Error: ${error.message}\n\n${USAGE}`);
      return EXIT_USAGE;
    }
    throw error;
  }

  if (mode.kind === 'help') {
    console.log(USAGE);
    return EXIT_OK;
  }

  loadLocalEnv();

  if (mode.kind === 'check-config') return runCheckConfig();

  const directUrl = process.env.DIRECT_URL;
  if (!directUrl) {
    console.error('Error: DIRECT_URL is not set. Configure it in your local .env (see .env.example).');
    return EXIT_USAGE;
  }

  // Loaded lazily so --help and --check-config work without a generated client or database.
  const { PrismaClient } = await import('@prisma/client');
  const { createPrismaProvisioningStore } = await import('../server/provisioning/prismaStore');
  const { argon2Hasher } = await import('../server/utils/password');

  const prisma = new PrismaClient({ datasourceUrl: directUrl });
  const store = createPrismaProvisioningStore(prisma);

  try {
    if (mode.kind === 'rotate') {
      const result = await rotateAdminPassword(
        mode.role,
        process.env[ROTATION_PASSWORD_ENV],
        store,
        argon2Hasher,
        { apply: mode.apply },
      );
      console.log(mode.apply ? 'Password rotation:' : 'Password rotation (dry run):');
      const detail = result.status === 'ROTATED' ? `revoked ${result.revokedSessions} session(s)` : result.detail;
      printRow(result.role, result.email ?? '-', result.status, detail);
      if (result.status === 'ROTATED') {
        console.log(`\nRemove ${ROTATION_PASSWORD_ENV} from your environment now.`);
      }
      return result.status === 'ROTATED' || result.status === 'WOULD_ROTATE' ? EXIT_OK : EXIT_ATTENTION;
    }

    const slots = parseAdminSlots(process.env);
    const results = await provisionAdmins(slots, store, argon2Hasher, {
      apply: mode.apply,
      allowPlaceholderEmails: mode.allowPlaceholderEmails,
    });
    console.log(mode.apply ? 'Provisioning:' : 'Provisioning (dry run — no changes made):');
    for (const r of results) printRow(r.role, r.email, r.status, r.detail);
    const needsAttention = results.some((r) => r.status === 'CONFLICT' || r.status === 'INVALID_CONFIG');
    return needsAttention ? EXIT_ATTENTION : EXIT_OK;
  } finally {
    await prisma.$disconnect();
  }
};

main()
  .then((code) => {
    process.exitCode = code;
  })
  .catch((error: unknown) => {
    if (error instanceof ProvisioningConfigError) {
      console.error(`Configuration error:\n${error.message}`);
      process.exitCode = EXIT_USAGE;
      return;
    }
    // Print only the error name/message — never the environment or connection details.
    const message = error instanceof Error ? `${error.name}: ${error.message}` : 'Unknown error';
    console.error(`Provisioning failed. ${message}`);
    process.exitCode = EXIT_ATTENTION;
  });
