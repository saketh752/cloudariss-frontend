import { type AdminRole, isAdminRole } from './config';

export type CliMode =
  | { kind: 'check-config' }
  | { kind: 'provision'; apply: boolean; allowPlaceholderEmails: boolean }
  | { kind: 'rotate'; role: AdminRole; apply: boolean }
  | { kind: 'help' };

export class CliUsageError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'CliUsageError';
  }
}

export const USAGE = `Cloudariss admin provisioning (create-only)

Usage:
  npm run admin:provision -- [options]

Modes:
  (default)                 Dry run: report which accounts would be created. No writes.
  --apply                   Create missing accounts. Existing accounts are never modified.
  --check-config            Validate env configuration and password policy only. No database access.
  --rotate <ROLE>           Dry run a password rotation for one role (CEO | CO_FOUNDER | WEB_ADMIN).
  --rotate <ROLE> --apply   Rotate that role's password from ADMIN_ROTATION_NEW_PASSWORD and revoke all its sessions.

Options:
  --allow-placeholder-emails  Permit creating accounts on the placeholder.cloudariss.com domain.
  --help                      Show this message.
`;

export const parseCliArgs = (argv: string[]): CliMode => {
  let apply = false;
  let checkConfig = false;
  let allowPlaceholderEmails = false;
  let rotateRole: AdminRole | undefined;
  let help = false;

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    switch (arg) {
      case '--apply':
        apply = true;
        break;
      case '--check-config':
        checkConfig = true;
        break;
      case '--allow-placeholder-emails':
        allowPlaceholderEmails = true;
        break;
      case '--help':
      case '-h':
        help = true;
        break;
      case '--rotate': {
        const value = argv[i + 1];
        if (!value || value.startsWith('--')) {
          throw new CliUsageError('--rotate requires a role: CEO, CO_FOUNDER or WEB_ADMIN.');
        }
        if (!isAdminRole(value)) {
          throw new CliUsageError(`Unknown role "${value}". Expected CEO, CO_FOUNDER or WEB_ADMIN.`);
        }
        if (rotateRole) throw new CliUsageError('--rotate may only be specified once.');
        rotateRole = value;
        i += 1;
        break;
      }
      default:
        throw new CliUsageError(`Unknown argument "${arg}".`);
    }
  }

  if (help) return { kind: 'help' };

  if (checkConfig && (apply || rotateRole || allowPlaceholderEmails)) {
    throw new CliUsageError('--check-config cannot be combined with other options.');
  }
  if (checkConfig) return { kind: 'check-config' };

  if (rotateRole) {
    if (allowPlaceholderEmails) {
      throw new CliUsageError('--allow-placeholder-emails does not apply to --rotate.');
    }
    return { kind: 'rotate', role: rotateRole, apply };
  }

  return { kind: 'provision', apply, allowPlaceholderEmails };
};

