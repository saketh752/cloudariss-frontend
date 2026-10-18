import {
  type AdminRole,
  type AdminSlotConfig,
  isPlaceholderEmail,
  validatePasswordPolicy,
} from './config';

/**
 * Create-only admin provisioning engine.
 *
 * Safety guarantees (covered by tests):
 *  - Never updates or resets an existing account during a provisioning run.
 *  - Writes nothing unless `apply` is true (dry-run by default).
 *  - Password rotation is a separate, explicit operation for exactly one role.
 *  - Plaintext passwords and hashes never appear in returned results or log lines.
 */

export interface ExistingAdmin {
  id: string;
  email: string;
  roleLabel: AdminRole;
}

/** Thrown by a store when a UNIQUE constraint (email or role_label) rejects an insert. */
export class UniqueConflictError extends Error {
  constructor(message = 'Unique constraint violation') {
    super(message);
    this.name = 'UniqueConflictError';
  }
}

export interface ProvisioningStore {
  /** Accounts matching either the role label or the email. */
  findByRoleOrEmail(role: AdminRole, email: string): Promise<ExistingAdmin[]>;
  /** Inserts one account and its audit entry atomically. Must throw UniqueConflictError on unique violation. */
  createAdmin(input: { email: string; name: string; roleLabel: AdminRole; passwordHash: string }): Promise<{ id: string }>;
  /** Returns the stored hash for a role, or null when no account exists. Used only for rotation reuse checks. */
  getPasswordHashByRole(role: AdminRole): Promise<{ id: string; email: string; passwordHash: string } | null>;
  /** Atomically: replace hash, set password_changed_at, revoke ALL sessions, write audit entry. */
  rotatePassword(input: { adminId: string; passwordHash: string }): Promise<{ revokedSessions: number }>;
}

export interface PasswordHasher {
  hash(password: string): Promise<string>;
  verify(hash: string, password: string): Promise<boolean>;
}

export type ProvisionStatus =
  | 'CREATED'
  | 'WOULD_CREATE'
  | 'SKIPPED_EXISTS'
  | 'CONFLICT'
  | 'INVALID_CONFIG';

export interface ProvisionResult {
  role: AdminRole;
  email: string;
  status: ProvisionStatus;
  detail?: string;
}

export interface ProvisionOptions {
  apply: boolean;
  allowPlaceholderEmails: boolean;
}

export const provisionAdmins = async (
  slots: AdminSlotConfig[],
  store: ProvisioningStore,
  hasher: PasswordHasher,
  options: ProvisionOptions,
): Promise<ProvisionResult[]> => {
  const results: ProvisionResult[] = [];

  for (const slot of slots) {
    const base = { role: slot.role, email: slot.email };
    const matches = await store.findByRoleOrEmail(slot.role, slot.email);

    const sameRoleSameEmail = matches.find((m) => m.roleLabel === slot.role && m.email === slot.email);
    const sameRoleOtherEmail = matches.find((m) => m.roleLabel === slot.role && m.email !== slot.email);
    const emailOnOtherRole = matches.find((m) => m.email === slot.email && m.roleLabel !== slot.role);

    if (sameRoleSameEmail) {
      results.push({ ...base, status: 'SKIPPED_EXISTS', detail: 'Account already exists; left unchanged.' });
      continue;
    }
    if (sameRoleOtherEmail) {
      results.push({
        ...base,
        status: 'CONFLICT',
        detail: `Role already provisioned with a different email (${sameRoleOtherEmail.email}); left unchanged.`,
      });
      continue;
    }
    if (emailOnOtherRole) {
      results.push({
        ...base,
        status: 'CONFLICT',
        detail: `Email already belongs to role ${emailOnOtherRole.roleLabel}; left unchanged.`,
      });
      continue;
    }

    // Account is missing — validate everything needed to create it.
    if (isPlaceholderEmail(slot.email) && !options.allowPlaceholderEmails) {
      results.push({
        ...base,
        status: 'INVALID_CONFIG',
        detail: 'Placeholder email domain; pass --allow-placeholder-emails to create it intentionally.',
      });
      continue;
    }
    if (!slot.initialPassword) {
      results.push({ ...base, status: 'INVALID_CONFIG', detail: 'Initial password is not set for this missing account.' });
      continue;
    }
    const problems = validatePasswordPolicy(slot.initialPassword, slot.email);
    if (problems.length > 0) {
      results.push({ ...base, status: 'INVALID_CONFIG', detail: `Initial password ${problems.join('; ')}.` });
      continue;
    }

    if (!options.apply) {
      results.push({ ...base, status: 'WOULD_CREATE', detail: 'Dry run; re-run with --apply to create.' });
      continue;
    }

    const passwordHash = await hasher.hash(slot.initialPassword);
    try {
      await store.createAdmin({ email: slot.email, name: slot.name, roleLabel: slot.role, passwordHash });
      results.push({ ...base, status: 'CREATED' });
    } catch (error) {
      if (error instanceof UniqueConflictError) {
        // A concurrent run created it first. Never overwrite — report and move on.
        results.push({ ...base, status: 'SKIPPED_EXISTS', detail: 'Created concurrently by another run; left unchanged.' });
        continue;
      }
      throw error;
    }
  }

  return results;
};

export type RotateStatus = 'ROTATED' | 'WOULD_ROTATE' | 'NOT_FOUND' | 'INVALID_CONFIG';

export interface RotateResult {
  role: AdminRole;
  status: RotateStatus;
  email?: string;
  revokedSessions?: number;
  detail?: string;
}

/**
 * Explicit single-role password rotation. Revokes every active session for that admin.
 * The new password is supplied at runtime only (never from committed config).
 */
export const rotateAdminPassword = async (
  role: AdminRole,
  newPassword: string | undefined,
  store: ProvisioningStore,
  hasher: PasswordHasher,
  options: { apply: boolean },
): Promise<RotateResult> => {
  const existing = await store.getPasswordHashByRole(role);
  if (!existing) {
    return { role, status: 'NOT_FOUND', detail: 'No account exists for this role; use provisioning to create it.' };
  }
  const base = { role, email: existing.email };

  if (!newPassword) {
    return { ...base, status: 'INVALID_CONFIG', detail: 'New password was not supplied for rotation.' };
  }
  const problems = validatePasswordPolicy(newPassword, existing.email);
  if (problems.length > 0) {
    return { ...base, status: 'INVALID_CONFIG', detail: `New password ${problems.join('; ')}.` };
  }
  if (await hasher.verify(existing.passwordHash, newPassword)) {
    return { ...base, status: 'INVALID_CONFIG', detail: 'New password must differ from the current password.' };
  }

  if (!options.apply) {
    return { ...base, status: 'WOULD_ROTATE', detail: 'Dry run; re-run with --apply to rotate and revoke sessions.' };
  }

  const passwordHash = await hasher.hash(newPassword);
  const { revokedSessions } = await store.rotatePassword({ adminId: existing.id, passwordHash });
  return { ...base, status: 'ROTATED', revokedSessions };
};

