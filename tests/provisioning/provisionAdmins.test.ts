import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  type AdminSlotConfig,
  ProvisioningConfigError,
  parseAdminSlots,
  validatePasswordPolicy,
} from '../../server/provisioning/config';
import { CliUsageError, parseCliArgs } from '../../server/provisioning/cliArgs';
import {
  type ExistingAdmin,
  type PasswordHasher,
  type ProvisioningStore,
  UniqueConflictError,
  provisionAdmins,
  rotateAdminPassword,
} from '../../server/provisioning/provisionAdmins';
import { hashPassword, verifyPassword } from '../../server/utils/password';
import type { AdminRole } from '../../server/provisioning/config';

// ---------------------------------------------------------------------------
// Test doubles (no database). Passwords below are synthetic test fixtures only.
// ---------------------------------------------------------------------------

const STRONG = 'Correct-Horse-Battery-91';
const STRONG_2 = 'Velvet-Orbit-Lantern-47';
const STRONG_3 = 'Granite-Comet-Harbor-63';

interface StoredAdmin extends ExistingAdmin {
  name: string;
  passwordHash: string;
  sessions: number;
}

const fakeHasher: PasswordHasher & { hashCalls: number } = {
  hashCalls: 0,
  async hash(pw) {
    this.hashCalls += 1;
    return `hashed:${pw.split('').reverse().join('')}`;
  },
  async verify(hash, pw) {
    return hash === `hashed:${pw.split('').reverse().join('')}`;
  },
};

const createFakeStore = (seed: StoredAdmin[] = []) => {
  const admins = [...seed];
  const calls = { create: 0, rotate: 0 };
  let failNextCreateWithUnique = false;

  const store: ProvisioningStore = {
    async findByRoleOrEmail(role, email) {
      return admins
        .filter((a) => a.roleLabel === role || a.email === email)
        .map(({ id, email: e, roleLabel }) => ({ id, email: e, roleLabel }));
    },
    async createAdmin({ email, name, roleLabel, passwordHash }) {
      calls.create += 1;
      if (failNextCreateWithUnique) {
        failNextCreateWithUnique = false;
        throw new UniqueConflictError();
      }
      if (admins.some((a) => a.email === email || a.roleLabel === roleLabel)) throw new UniqueConflictError();
      const id = `id-${admins.length + 1}`;
      admins.push({ id, email, name, roleLabel, passwordHash, sessions: 0 });
      return { id };
    },
    async getPasswordHashByRole(role) {
      const a = admins.find((x) => x.roleLabel === role);
      return a ? { id: a.id, email: a.email, passwordHash: a.passwordHash } : null;
    },
    async rotatePassword({ adminId, passwordHash }) {
      calls.rotate += 1;
      const a = admins.find((x) => x.id === adminId)!;
      const revokedSessions = a.sessions;
      a.passwordHash = passwordHash;
      a.sessions = 0;
      return { revokedSessions };
    },
  };

  return {
    store,
    admins,
    calls,
    failNextCreate: () => {
      failNextCreateWithUnique = true;
    },
  };
};

const slots = (overrides: Partial<Record<AdminRole, Partial<AdminSlotConfig>>> = {}): AdminSlotConfig[] => [
  { role: 'CEO', name: 'CEO', email: 'ceo@cloudariss.example', initialPassword: STRONG, ...overrides.CEO },
  { role: 'CO_FOUNDER', name: 'Co-Founder', email: 'cofounder@cloudariss.example', initialPassword: STRONG_2, ...overrides.CO_FOUNDER },
  { role: 'WEB_ADMIN', name: 'Website Administrator', email: 'webadmin@cloudariss.example', initialPassword: STRONG_3, ...overrides.WEB_ADMIN },
];

const APPLY = { apply: true, allowPlaceholderEmails: false };
const DRY = { apply: false, allowPlaceholderEmails: false };

// ---------------------------------------------------------------------------
// Create-only provisioning
// ---------------------------------------------------------------------------

describe('provisionAdmins — create-only behaviour', () => {
  it('creates all three missing accounts and stores only hashes', async () => {
    const { store, admins } = createFakeStore();
    const results = await provisionAdmins(slots(), store, fakeHasher, APPLY);
    assert.deepEqual(results.map((r) => r.status), ['CREATED', 'CREATED', 'CREATED']);
    assert.equal(admins.length, 3);
    for (const a of admins) {
      assert.ok(a.passwordHash.startsWith('hashed:'));
      assert.ok(![STRONG, STRONG_2, STRONG_3].includes(a.passwordHash));
    }
  });

  it('is idempotent: a second run skips every account and never rewrites hashes', async () => {
    const { store, admins, calls } = createFakeStore();
    await provisionAdmins(slots(), store, fakeHasher, APPLY);
    const hashesBefore = admins.map((a) => a.passwordHash);
    const createsBefore = calls.create;

    const second = await provisionAdmins(
      slots({ CEO: { initialPassword: 'A-Totally-Different-Pass-55' } }),
      store,
      fakeHasher,
      APPLY,
    );
    assert.deepEqual(second.map((r) => r.status), ['SKIPPED_EXISTS', 'SKIPPED_EXISTS', 'SKIPPED_EXISTS']);
    assert.equal(calls.create, createsBefore);
    assert.equal(calls.rotate, 0);
    assert.deepEqual(admins.map((a) => a.passwordHash), hashesBefore);
  });

  it('dry run (default) reports WOULD_CREATE and writes nothing', async () => {
    const { store, admins, calls } = createFakeStore();
    fakeHasher.hashCalls = 0;
    const results = await provisionAdmins(slots(), store, fakeHasher, DRY);
    assert.deepEqual(results.map((r) => r.status), ['WOULD_CREATE', 'WOULD_CREATE', 'WOULD_CREATE']);
    assert.equal(admins.length, 0);
    assert.equal(calls.create, 0);
    assert.equal(fakeHasher.hashCalls, 0);
  });

  it('reports CONFLICT when the role already exists with a different email', async () => {
    const { store, calls } = createFakeStore([
      { id: 'x', email: 'old-ceo@cloudariss.example', roleLabel: 'CEO', name: 'CEO', passwordHash: 'h', sessions: 0 },
    ]);
    const [ceo] = await provisionAdmins(slots(), store, fakeHasher, APPLY);
    assert.equal(ceo.status, 'CONFLICT');
    assert.equal(calls.create, 2); // the other two roles were still created
  });

  it('reports CONFLICT when the email belongs to another role', async () => {
    const { store } = createFakeStore([
      { id: 'x', email: 'ceo@cloudariss.example', roleLabel: 'WEB_ADMIN', name: 'W', passwordHash: 'h', sessions: 0 },
    ]);
    const [ceo] = await provisionAdmins(slots(), store, fakeHasher, APPLY);
    assert.equal(ceo.status, 'CONFLICT');
  });

  it('treats a concurrent unique-constraint race as SKIPPED_EXISTS, never overwriting', async () => {
    const { store, failNextCreate } = createFakeStore();
    failNextCreate();
    const [ceo] = await provisionAdmins(slots(), store, fakeHasher, APPLY);
    assert.equal(ceo.status, 'SKIPPED_EXISTS');
  });

  it('rejects the .env.example placeholder password', async () => {
    const { store, calls } = createFakeStore();
    const [ceo] = await provisionAdmins(
      slots({ CEO: { initialPassword: 'CHANGE_ME_STRONG_PASSWORD_1' } }),
      store,
      fakeHasher,
      APPLY,
    );
    assert.equal(ceo.status, 'INVALID_CONFIG');
    assert.equal(calls.create, 2);
  });

  it('requires an initial password only for accounts that are missing', async () => {
    const { store } = createFakeStore([
      { id: 'x', email: 'ceo@cloudariss.example', roleLabel: 'CEO', name: 'CEO', passwordHash: 'h', sessions: 0 },
    ]);
    const results = await provisionAdmins(
      slots({ CEO: { initialPassword: undefined }, CO_FOUNDER: { initialPassword: undefined } }),
      store,
      fakeHasher,
      APPLY,
    );
    assert.deepEqual(results.map((r) => r.status), ['SKIPPED_EXISTS', 'INVALID_CONFIG', 'CREATED']);
  });

  it('blocks placeholder emails unless explicitly allowed', async () => {
    const placeholder = slots({ CEO: { email: 'ceo@placeholder.cloudariss.com' } });
    const blocked = await provisionAdmins(placeholder, createFakeStore().store, fakeHasher, APPLY);
    assert.equal(blocked[0].status, 'INVALID_CONFIG');

    const allowed = await provisionAdmins(placeholder, createFakeStore().store, fakeHasher, {
      apply: true,
      allowPlaceholderEmails: true,
    });
    assert.equal(allowed[0].status, 'CREATED');
  });

  it('never includes passwords or hashes in returned results', async () => {
    const { store } = createFakeStore();
    const results = await provisionAdmins(
      slots({ CO_FOUNDER: { initialPassword: 'short' } }),
      store,
      fakeHasher,
      APPLY,
    );
    const serialized = JSON.stringify(results);
    for (const secret of [STRONG, STRONG_2, STRONG_3, 'short', 'hashed:']) {
      assert.ok(!serialized.includes(secret), `result leaked "${secret}"`);
    }
  });
});

// ---------------------------------------------------------------------------
// Explicit rotation
// ---------------------------------------------------------------------------

describe('rotateAdminPassword — explicit, single-role rotation', () => {
  const seeded = async () => {
    const ctx = createFakeStore();
    await provisionAdmins(slots(), ctx.store, fakeHasher, APPLY);
    ctx.admins.forEach((a) => {
      a.sessions = 2;
    });
    return ctx;
  };

  it('dry run reports WOULD_ROTATE without changing anything', async () => {
    const { store, admins, calls } = await seeded();
    const before = admins[0].passwordHash;
    const result = await rotateAdminPassword('CEO', 'Fresh-Quartz-Meadow-28', store, fakeHasher, { apply: false });
    assert.equal(result.status, 'WOULD_ROTATE');
    assert.equal(calls.rotate, 0);
    assert.equal(admins[0].passwordHash, before);
  });

  it('rotates only the target role and revokes its sessions', async () => {
    const { store, admins } = await seeded();
    const otherHashes = admins.slice(1).map((a) => a.passwordHash);
    const result = await rotateAdminPassword('CEO', 'Fresh-Quartz-Meadow-28', store, fakeHasher, { apply: true });
    assert.equal(result.status, 'ROTATED');
    assert.equal(result.revokedSessions, 2);
    assert.equal(admins[0].sessions, 0);
    assert.deepEqual(admins.slice(1).map((a) => a.passwordHash), otherHashes);
    assert.deepEqual(admins.slice(1).map((a) => a.sessions), [2, 2]);
  });

  it('refuses to reuse the current password', async () => {
    const { store, calls } = await seeded();
    const result = await rotateAdminPassword('CEO', STRONG, store, fakeHasher, { apply: true });
    assert.equal(result.status, 'INVALID_CONFIG');
    assert.equal(calls.rotate, 0);
  });

  it('enforces the password policy and a supplied password', async () => {
    const { store } = await seeded();
    assert.equal((await rotateAdminPassword('CEO', 'weak', store, fakeHasher, { apply: true })).status, 'INVALID_CONFIG');
    assert.equal((await rotateAdminPassword('CEO', undefined, store, fakeHasher, { apply: true })).status, 'INVALID_CONFIG');
  });

  it('returns NOT_FOUND for a role that has not been provisioned', async () => {
    const { store } = createFakeStore();
    const result = await rotateAdminPassword('WEB_ADMIN', 'Fresh-Quartz-Meadow-28', store, fakeHasher, { apply: true });
    assert.equal(result.status, 'NOT_FOUND');
  });
});

// ---------------------------------------------------------------------------
// Configuration parsing and password policy
// ---------------------------------------------------------------------------

describe('parseAdminSlots', () => {
  const env = {
    ADMIN_CEO_NAME: 'CEO',
    ADMIN_CEO_EMAIL: '  CEO@Cloudariss.Example ',
    ADMIN_CEO_INITIAL_PASSWORD: STRONG,
    ADMIN_COFOUNDER_NAME: 'Co-Founder',
    ADMIN_COFOUNDER_EMAIL: 'cofounder@cloudariss.example',
    ADMIN_WEBADMIN_NAME: 'Website Administrator',
    ADMIN_WEBADMIN_EMAIL: 'webadmin@cloudariss.example',
  };

  it('normalizes emails to trimmed lowercase', () => {
    const parsed = parseAdminSlots(env);
    assert.equal(parsed[0].email, 'ceo@cloudariss.example');
    assert.equal(parsed.length, 3);
    assert.equal(parsed[1].initialPassword, undefined);
  });

  it('rejects duplicate emails across slots', () => {
    assert.throws(
      () => parseAdminSlots({ ...env, ADMIN_WEBADMIN_EMAIL: 'ceo@cloudariss.example' }),
      ProvisioningConfigError,
    );
  });

  it('rejects invalid or partially configured slots', () => {
    assert.throws(() => parseAdminSlots({ ...env, ADMIN_CEO_EMAIL: 'not-an-email' }), ProvisioningConfigError);
    assert.throws(() => parseAdminSlots({ ...env, ADMIN_CEO_NAME: '' }), ProvisioningConfigError);
  });

  it('rejects an empty configuration', () => {
    assert.throws(() => parseAdminSlots({}), ProvisioningConfigError);
  });
});

describe('validatePasswordPolicy', () => {
  it('accepts a long, non-placeholder passphrase', () => {
    assert.deepEqual(validatePasswordPolicy(STRONG, 'ceo@cloudariss.example'), []);
  });

  it('rejects short, placeholder, padded, repetitive and email-derived passwords', () => {
    const email = 'saketh@cloudariss.example';
    assert.ok(validatePasswordPolicy('Short-1', email).length > 0);
    assert.ok(validatePasswordPolicy('change_me_please_now', email).length > 0);
    assert.ok(validatePasswordPolicy(' Leading-Space-Pass-1', email).length > 0);
    assert.ok(validatePasswordPolicy('aaaaaaaaaaaaaaaa', email).length > 0);
    assert.ok(validatePasswordPolicy('MySakethPassword-2026', email).length > 0);
  });

  it('never echoes the password in policy messages', () => {
    const pw = 'CHANGE_ME_STRONG_PASSWORD_1';
    assert.ok(!validatePasswordPolicy(pw, 'a@b.example').join(' ').includes(pw));
  });
});

// ---------------------------------------------------------------------------
// CLI argument parsing
// ---------------------------------------------------------------------------

describe('parseCliArgs', () => {
  it('defaults to a dry run', () => {
    assert.deepEqual(parseCliArgs([]), { kind: 'provision', apply: false, allowPlaceholderEmails: false });
  });

  it('requires --apply to write', () => {
    assert.deepEqual(parseCliArgs(['--apply']), { kind: 'provision', apply: true, allowPlaceholderEmails: false });
  });

  it('parses an explicit single-role rotation', () => {
    assert.deepEqual(parseCliArgs(['--rotate', 'CEO', '--apply']), { kind: 'rotate', role: 'CEO', apply: true });
    assert.deepEqual(parseCliArgs(['--rotate', 'WEB_ADMIN']), { kind: 'rotate', role: 'WEB_ADMIN', apply: false });
  });

  it('rejects unknown roles, unknown flags and conflicting modes', () => {
    assert.throws(() => parseCliArgs(['--rotate']), CliUsageError);
    assert.throws(() => parseCliArgs(['--rotate', 'ceo']), CliUsageError);
    assert.throws(() => parseCliArgs(['--rotate', 'CEO', '--rotate', 'WEB_ADMIN']), CliUsageError);
    assert.throws(() => parseCliArgs(['--force']), CliUsageError);
    assert.throws(() => parseCliArgs(['--check-config', '--apply']), CliUsageError);
    assert.throws(() => parseCliArgs(['--rotate', 'CEO', '--allow-placeholder-emails']), CliUsageError);
  });
});

// ---------------------------------------------------------------------------
// Real Argon2id round trip (no database)
// ---------------------------------------------------------------------------

describe('argon2 password utility', () => {
  it('produces Argon2id hashes that verify only the original password', async () => {
    const hash = await hashPassword(STRONG);
    assert.ok(hash.startsWith('$argon2id$'));
    assert.ok(hash.includes('m=19456,t=2,p=1'));
    assert.equal(await verifyPassword(hash, STRONG), true);
    assert.equal(await verifyPassword(hash, STRONG_2), false);
  });

  it('returns false instead of throwing for malformed hashes', async () => {
    assert.equal(await verifyPassword('not-a-hash', STRONG), false);
  });
});

