import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { resolve } from 'node:path';

const root = process.cwd();
const schema = readFileSync(resolve(root, 'prisma/schema.prisma'), 'utf8');

const APPROVED_TABLES = [
  'admin_users',
  'admin_sessions',
  'rate_limit_buckets',
  'contact_enquiries',
  'enquiry_notes',
  'certificate_import_stagings',
  'certificate_import_batches',
  'certificates',
  'audit_logs',
].sort();

const migrationSql = () => {
  const dir = resolve(root, 'prisma/migrations');
  return readdirSync(dir, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => readFileSync(resolve(dir, d.name, 'migration.sql'), 'utf8'))
    .join('\n');
};

describe('Prisma schema guardrails', () => {
  it('maps exactly the nine approved tables', () => {
    const mapped = [...schema.matchAll(/@@map\("([a-z_]+)"\)/g)].map((m) => m[1]).sort();
    assert.deepEqual(mapped, APPROVED_TABLES);
  });

  it('contains no email outbox in V1', () => {
    assert.ok(!/outbox/i.test(schema.replace(/^\s*\/\/.*$/gm, '')));
  });

  it('enforces one account per admin role and unique emails', () => {
    assert.match(schema, /roleLabel\s+AdminRoleLabel\s+@unique/);
    assert.match(schema, /email\s+String\s+@unique/);
  });

  it('keeps only the existing Contact page program options', () => {
    const block = schema.match(/enum EnquiryProgram \{([^}]*)\}/)?.[1] ?? '';
    const values = block.split(/\s+/).filter((v) => /^[A-Z_]+$/.test(v));
    assert.deepEqual(values, ['CRPC', 'DAAP', 'GENERAL_INQUIRY']);
  });
});

describe('Initial migration', () => {
  const sql = migrationSql();

  it('creates every approved table and nothing else', () => {
    const created = [...sql.matchAll(/CREATE TABLE "([a-z_]+)"/g)].map((m) => m[1]).sort();
    assert.deepEqual(created, APPROVED_TABLES);
  });

  it('includes the database-level integrity CHECK constraints', () => {
    for (const name of [
      'admin_users_email_normalized_chk',
      'certificates_certificate_id_normalized_chk',
      'rate_limit_buckets_points_nonnegative_chk',
      'certificate_import_batches_counts_nonnegative_chk',
      'certificate_import_stagings_header_row_positive_chk',
    ]) {
      assert.ok(sql.includes(name), `missing CHECK constraint ${name}`);
    }
  });

  it('indexes rate-limit expiry and session lookups', () => {
    assert.match(sql, /CREATE INDEX "rate_limit_buckets_window_expires_at_idx"/);
    assert.match(sql, /CREATE UNIQUE INDEX "admin_sessions_token_hash_key"/);
  });
});

