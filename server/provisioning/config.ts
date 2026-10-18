import { z } from 'zod';

/**
 * Admin provisioning configuration and policy.
 * Pure functions only — no database or filesystem access — so safeguards are unit-testable.
 */

export const ADMIN_ROLES = ['CEO', 'CO_FOUNDER', 'WEB_ADMIN'] as const;
export type AdminRole = (typeof ADMIN_ROLES)[number];

/** Environment-variable prefix for each provisioned role slot. */
export const ROLE_ENV_PREFIX: Record<AdminRole, string> = {
  CEO: 'ADMIN_CEO',
  CO_FOUNDER: 'ADMIN_COFOUNDER',
  WEB_ADMIN: 'ADMIN_WEBADMIN',
};

/** Runtime-only variable used exclusively by an explicit `--rotate` run. */
export const ROTATION_PASSWORD_ENV = 'ADMIN_ROTATION_NEW_PASSWORD';

export const PLACEHOLDER_EMAIL_DOMAIN = 'placeholder.cloudariss.com';

export const PASSWORD_MIN_LENGTH = 12;
export const PASSWORD_MAX_LENGTH = 128;

export interface AdminSlotConfig {
  role: AdminRole;
  name: string;
  /** Lowercased + trimmed. */
  email: string;
  /** Optional: only required when the account must be created. Never logged. */
  initialPassword?: string;
}

export class ProvisioningConfigError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ProvisioningConfigError';
  }
}

export const normalizeEmail = (raw: string): string => raw.trim().toLowerCase();

const emailSchema = z
  .string()
  .transform(normalizeEmail)
  .pipe(z.email().max(254));

const nameSchema = z.string().trim().min(1).max(120);

/** True for the documented placeholder domain used until real admin emails are available. */
export const isPlaceholderEmail = (email: string): boolean =>
  normalizeEmail(email).endsWith(`@${PLACEHOLDER_EMAIL_DOMAIN}`);

/**
 * Returns human-readable policy violations. Never echoes the password itself.
 * Length-based policy (NIST SP 800-63B style) plus rejection of template placeholders.
 */
export const validatePasswordPolicy = (password: string, email: string): string[] => {
  const problems: string[] = [];
  if (password.length < PASSWORD_MIN_LENGTH) {
    problems.push(`must be at least ${PASSWORD_MIN_LENGTH} characters`);
  }
  if (password.length > PASSWORD_MAX_LENGTH) {
    problems.push(`must be at most ${PASSWORD_MAX_LENGTH} characters`);
  }
  if (/^change_me/i.test(password.trim())) {
    problems.push('is still the .env.example placeholder value');
  }
  if (password.trim() !== password) {
    problems.push('must not start or end with whitespace');
  }
  const lowered = password.toLowerCase();
  const localPart = normalizeEmail(email).split('@')[0] ?? '';
  if (lowered === normalizeEmail(email) || (localPart.length >= 4 && lowered.includes(localPart))) {
    problems.push('must not contain the account email or its local part');
  }
  if (new Set(password).size < 4) {
    problems.push('is too repetitive');
  }
  return problems;
};

/**
 * Reads the three role slots from an env-like record.
 * - A slot with neither NAME nor EMAIL set is treated as "not configured" and omitted.
 * - A partially configured slot, an invalid email, or duplicate emails across slots throws.
 */
export const parseAdminSlots = (env: Record<string, string | undefined>): AdminSlotConfig[] => {
  const slots: AdminSlotConfig[] = [];
  const errors: string[] = [];

  for (const role of ADMIN_ROLES) {
    const prefix = ROLE_ENV_PREFIX[role];
    const rawName = env[`${prefix}_NAME`];
    const rawEmail = env[`${prefix}_EMAIL`];
    const rawPassword = env[`${prefix}_INITIAL_PASSWORD`];

    if (!rawName?.trim() && !rawEmail?.trim()) continue;

    const name = nameSchema.safeParse(rawName ?? '');
    const email = emailSchema.safeParse(rawEmail ?? '');
    if (!name.success) errors.push(`${prefix}_NAME is missing or invalid (1-120 characters).`);
    if (!email.success) errors.push(`${prefix}_EMAIL is missing or not a valid email address.`);
    if (!name.success || !email.success) continue;

    slots.push({
      role,
      name: name.data,
      email: email.data,
      initialPassword: rawPassword ? rawPassword : undefined,
    });
  }

  const seen = new Map<string, AdminRole>();
  for (const slot of slots) {
    const previous = seen.get(slot.email);
    if (previous) {
      errors.push(`${ROLE_ENV_PREFIX[previous]}_EMAIL and ${ROLE_ENV_PREFIX[slot.role]}_EMAIL must be different.`);
    }
    seen.set(slot.email, slot.role);
  }

  if (errors.length > 0) {
    throw new ProvisioningConfigError(errors.join('\n'));
  }
  if (slots.length === 0) {
    throw new ProvisioningConfigError('No admin slots are configured. See .env.example section 3.');
  }
  return slots;
};

export const isAdminRole = (value: string): value is AdminRole =>
  (ADMIN_ROLES as readonly string[]).includes(value);

