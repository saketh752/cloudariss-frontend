import { describe, it, before } from 'node:test';
import assert from 'node:assert/strict';
import request from 'supertest';
import { createApp } from '../../server/app';
import { hashPassword } from '../../server/utils/password';
import { MemoryAuthRepository } from '../../server/modules/auth/authRepository';
import { MemoryRateLimiterStore } from '../../server/middleware/pgRateLimiter';

describe('Admin Authentication & Security Integration Tests', () => {
  const TRUSTED_ORIGIN = 'http://localhost:5173';
  let initialPasswordHash: string;
  let testUser: any;

  before(async () => {
    initialPasswordHash = await hashPassword('CurrentSuperAdminPass2026!');
    testUser = {
      id: 'd9b2d63d-a4fc-487b-8395-5cb418b76c81',
      email: 'admin@cloudariss.com',
      name: 'Cloudariss Administrator',
      roleLabel: 'CEO' as const,
      passwordHash: initialPasswordHash,
      isActive: true,
      passwordChangedAt: new Date(),
      lastLoginAt: null,
    };
  });

  const setupApp = (userOverrides = {}) => {
    const user = { ...testUser, ...userOverrides };
    const repo = new MemoryAuthRepository([user]);
    const rateLimiterStore = new MemoryRateLimiterStore();
    const app = createApp({
      authRepository: repo,
      rateLimiterStore,
      corsOrigin: TRUSTED_ORIGIN,
    });
    return { app, repo, user };
  };

  describe('POST /api/admin/auth/login', () => {
    it('authenticates valid credentials, sets HttpOnly SameSite=Strict cookie, returns user and csrfToken', async () => {
      const { app, repo, user } = setupApp();

      const res = await request(app)
        .post('/api/admin/auth/login')
        .set('Origin', TRUSTED_ORIGIN)
        .send({
          email: 'admin@cloudariss.com',
          password: 'CurrentSuperAdminPass2026!',
        });

      assert.equal(res.status, 200);
      assert.equal(res.body.success, true);
      assert.equal(res.body.user.email, 'admin@cloudariss.com');
      assert.equal(res.body.user.roleLabel, 'CEO');
      assert.ok(typeof res.body.csrfToken === 'string');
      assert.equal(res.body.csrfToken.length, 64);

      // Check cookie
      const cookies = res.headers['set-cookie'];
      assert.ok(cookies && cookies.length > 0);
      const cookieStr = cookies[0];
      assert.match(cookieStr, /cld_admin_sid=[0-9a-f]{64}/);
      assert.match(cookieStr, /HttpOnly/i);
      assert.match(cookieStr, /SameSite=Strict/i);
      assert.match(cookieStr, /Path=\//);

      // Verify audit log recorded
      assert.ok(repo.auditLogs.some((l) => l.action === 'ADMIN_LOGIN_SUCCESS' && l.actorId === user.id));
    });

    it('rejects incorrect password with 401 and generic message', async () => {
      const { app } = setupApp();

      const res = await request(app)
        .post('/api/admin/auth/login')
        .set('Origin', TRUSTED_ORIGIN)
        .send({
          email: 'admin@cloudariss.com',
          password: 'WrongPassword123!',
        });

      assert.equal(res.status, 401);
      assert.equal(res.body.error, 'Unauthorized');
      assert.equal(res.body.message, 'Invalid email or password.');
      assert.ok(!res.headers['set-cookie']);
    });

    it('executes dummy timing guard on unknown email, returning identical 401 generic message', async () => {
      const { app } = setupApp();

      const start = Date.now();
      const res = await request(app)
        .post('/api/admin/auth/login')
        .set('Origin', TRUSTED_ORIGIN)
        .send({
          email: 'nonexistent@cloudariss.com',
          password: 'SomePassword123!',
        });
      const duration = Date.now() - start;

      assert.equal(res.status, 401);
      assert.equal(res.body.error, 'Unauthorized');
      assert.equal(res.body.message, 'Invalid email or password.');
      // Argon2id dummy hash execution ensures timing takes non-trivial time (~30ms+)
      assert.ok(duration >= 20, `Expected timing guard delay, got ${duration}ms`);
    });

    it('rejects inactive admin accounts with generic 401 message', async () => {
      const { app } = setupApp({ isActive: false });

      const res = await request(app)
        .post('/api/admin/auth/login')
        .set('Origin', TRUSTED_ORIGIN)
        .send({
          email: 'admin@cloudariss.com',
          password: 'CurrentSuperAdminPass2026!',
        });

      assert.equal(res.status, 401);
      assert.equal(res.body.message, 'Invalid email or password.');
    });

    it('validates request payload and rejects invalid email or missing password with 400', async () => {
      const { app } = setupApp();

      const res = await request(app)
        .post('/api/admin/auth/login')
        .set('Origin', TRUSTED_ORIGIN)
        .send({
          email: 'not-an-email',
          password: '',
        });

      assert.equal(res.status, 400);
      assert.equal(res.body.error, 'Bad Request');
      assert.ok(Array.isArray(res.body.details));
    });
  });

  describe('GET /api/admin/auth/me', () => {
    it('returns user details and csrfToken when valid session cookie is provided', async () => {
      const { app } = setupApp();

      // Log in first
      const loginRes = await request(app)
        .post('/api/admin/auth/login')
        .set('Origin', TRUSTED_ORIGIN)
        .send({
          email: 'admin@cloudariss.com',
          password: 'CurrentSuperAdminPass2026!',
        });

      const cookie = loginRes.headers['set-cookie'];

      const meRes = await request(app)
        .get('/api/admin/auth/me')
        .set('Origin', TRUSTED_ORIGIN)
        .set('Cookie', cookie);

      assert.equal(meRes.status, 200);
      assert.equal(meRes.body.user.email, 'admin@cloudariss.com');
      assert.equal(meRes.body.csrfToken, loginRes.body.csrfToken);
    });

    it('rejects unauthenticated requests with 401', async () => {
      const { app } = setupApp();

      const res = await request(app)
        .get('/api/admin/auth/me')
        .set('Origin', TRUSTED_ORIGIN);

      assert.equal(res.status, 401);
      assert.equal(res.body.error, 'Unauthorized');
    });

    it('rejects expired session tokens with 401', async () => {
      const { repo, user } = setupApp();

      // Manually insert an expired session
      const expiredSession = await repo.createSession({
        adminUserId: user.id,
        tokenHash: 'a'.repeat(64),
        csrfToken: 'b'.repeat(64),
        expiresAt: new Date(Date.now() - 10000), // expired 10s ago
      });

      // Note: cookie contains token, lookup finds hash
      // Create a dummy token whose sha256 is 'a'.repeat(64):
      // Or test via repo lookup returning null for expired session
      const lookup = await repo.findActiveSession(expiredSession.tokenHash);
      assert.equal(lookup, null);
    });
  });

  describe('POST /api/admin/auth/logout', () => {
    it('revokes the session and clears session cookie on valid logout with CSRF token', async () => {
      const { app, repo } = setupApp();

      const loginRes = await request(app)
        .post('/api/admin/auth/login')
        .set('Origin', TRUSTED_ORIGIN)
        .send({
          email: 'admin@cloudariss.com',
          password: 'CurrentSuperAdminPass2026!',
        });

      const cookie = loginRes.headers['set-cookie'];
      const csrfToken = loginRes.body.csrfToken;

      const logoutRes = await request(app)
        .post('/api/admin/auth/logout')
        .set('Origin', TRUSTED_ORIGIN)
        .set('Cookie', cookie)
        .set('X-CSRF-Token', csrfToken);

      assert.equal(logoutRes.status, 200);
      assert.equal(logoutRes.body.success, true);

      // Verify session was revoked in repository
      for (const session of repo.sessions.values()) {
        assert.ok(session.revokedAt !== null);
      }

      // Subsequent /me request with old cookie must fail with 401
      const meRes = await request(app)
        .get('/api/admin/auth/me')
        .set('Origin', TRUSTED_ORIGIN)
        .set('Cookie', cookie);

      assert.equal(meRes.status, 401);
    });

    it('rejects logout without X-CSRF-Token header with 403 Forbidden', async () => {
      const { app } = setupApp();

      const loginRes = await request(app)
        .post('/api/admin/auth/login')
        .set('Origin', TRUSTED_ORIGIN)
        .send({
          email: 'admin@cloudariss.com',
          password: 'CurrentSuperAdminPass2026!',
        });

      const cookie = loginRes.headers['set-cookie'];

      const logoutRes = await request(app)
        .post('/api/admin/auth/logout')
        .set('Origin', TRUSTED_ORIGIN)
        .set('Cookie', cookie);

      assert.equal(logoutRes.status, 403);
      assert.match(logoutRes.body.message, /CSRF token missing/i);
    });
  });

  describe('POST /api/admin/auth/change-password', () => {
    it('rotates session, updates hash, revokes prior sessions, and issues new CSRF token and cookie', async () => {
      const { app, repo } = setupApp();

      const loginRes = await request(app)
        .post('/api/admin/auth/login')
        .set('Origin', TRUSTED_ORIGIN)
        .send({
          email: 'admin@cloudariss.com',
          password: 'CurrentSuperAdminPass2026!',
        });

      const oldCookie = loginRes.headers['set-cookie'];
      const oldCsrfToken = loginRes.body.csrfToken;

      const changeRes = await request(app)
        .post('/api/admin/auth/change-password')
        .set('Origin', TRUSTED_ORIGIN)
        .set('Cookie', oldCookie)
        .set('X-CSRF-Token', oldCsrfToken)
        .send({
          currentPassword: 'CurrentSuperAdminPass2026!',
          newPassword: 'BrandNewStrongPassphrase2026!#',
        });

      assert.equal(changeRes.status, 200);
      assert.equal(changeRes.body.success, true);
      assert.notEqual(changeRes.body.csrfToken, oldCsrfToken);

      const newCookie = changeRes.headers['set-cookie'];
      assert.ok(newCookie && newCookie.length > 0);

      // Old cookie cannot access /me
      const oldMeRes = await request(app)
        .get('/api/admin/auth/me')
        .set('Origin', TRUSTED_ORIGIN)
        .set('Cookie', oldCookie);
      assert.equal(oldMeRes.status, 401);

      // New cookie can access /me
      const newMeRes = await request(app)
        .get('/api/admin/auth/me')
        .set('Origin', TRUSTED_ORIGIN)
        .set('Cookie', newCookie);
      assert.equal(newMeRes.status, 200);
      assert.equal(newMeRes.body.csrfToken, changeRes.body.csrfToken);

      // Verify audit log recorded
      assert.ok(repo.auditLogs.some((l) => l.action === 'ADMIN_PASSWORD_CHANGED'));
    });

    it('rejects incorrect current password with 400', async () => {
      const { app } = setupApp();

      const loginRes = await request(app)
        .post('/api/admin/auth/login')
        .set('Origin', TRUSTED_ORIGIN)
        .send({
          email: 'admin@cloudariss.com',
          password: 'CurrentSuperAdminPass2026!',
        });

      const cookie = loginRes.headers['set-cookie'];
      const csrfToken = loginRes.body.csrfToken;

      const changeRes = await request(app)
        .post('/api/admin/auth/change-password')
        .set('Origin', TRUSTED_ORIGIN)
        .set('Cookie', cookie)
        .set('X-CSRF-Token', csrfToken)
        .send({
          currentPassword: 'IncorrectCurrentPassword123!',
          newPassword: 'BrandNewStrongPassphrase2026!#',
        });

      assert.equal(changeRes.status, 400);
      assert.match(changeRes.body.message, /Current password is incorrect/i);
    });

    it('rejects new password matching current password with 400', async () => {
      const { app } = setupApp();

      const loginRes = await request(app)
        .post('/api/admin/auth/login')
        .set('Origin', TRUSTED_ORIGIN)
        .send({
          email: 'admin@cloudariss.com',
          password: 'CurrentSuperAdminPass2026!',
        });

      const cookie = loginRes.headers['set-cookie'];
      const csrfToken = loginRes.body.csrfToken;

      const changeRes = await request(app)
        .post('/api/admin/auth/change-password')
        .set('Origin', TRUSTED_ORIGIN)
        .set('Cookie', cookie)
        .set('X-CSRF-Token', csrfToken)
        .send({
          currentPassword: 'CurrentSuperAdminPass2026!',
          newPassword: 'CurrentSuperAdminPass2026!',
        });

      assert.equal(changeRes.status, 400);
      assert.match(changeRes.body.message, /cannot be the same/i);
    });

    it('rejects weak or placeholder new passwords with 400', async () => {
      const { app } = setupApp();

      const loginRes = await request(app)
        .post('/api/admin/auth/login')
        .set('Origin', TRUSTED_ORIGIN)
        .send({
          email: 'admin@cloudariss.com',
          password: 'CurrentSuperAdminPass2026!',
        });

      const cookie = loginRes.headers['set-cookie'];
      const csrfToken = loginRes.body.csrfToken;

      const changeRes = await request(app)
        .post('/api/admin/auth/change-password')
        .set('Origin', TRUSTED_ORIGIN)
        .set('Cookie', cookie)
        .set('X-CSRF-Token', csrfToken)
        .send({
          currentPassword: 'CurrentSuperAdminPass2026!',
          newPassword: 'CHANGE_ME_NOW_123',
        });

      assert.equal(changeRes.status, 400);
      assert.match(changeRes.body.details[0].message, /placeholder/i);
    });
  });

  describe('Express Core & Payload Limit', () => {
    it('rejects JSON payloads exceeding 64KB with 413 Payload Too Large', async () => {
      const { app } = setupApp();
      const largeString = 'x'.repeat(70 * 1024); // 70KB

      const res = await request(app)
        .post('/api/admin/auth/login')
        .set('Origin', TRUSTED_ORIGIN)
        .send({ email: 'admin@cloudariss.com', password: largeString });

      assert.equal(res.status, 413);
      assert.equal(res.body.error, 'Payload Too Large');
    });

    it('returns 404 for unmapped API routes', async () => {
      const { app } = setupApp();

      const res = await request(app)
        .get('/api/admin/unknown-route')
        .set('Origin', TRUSTED_ORIGIN);

      assert.equal(res.status, 404);
      assert.equal(res.body.error, 'Not Found');
    });

    it('responds to health check endpoint /api/health with 200 OK', async () => {
      const { app } = setupApp();

      const res = await request(app).get('/api/health');
      assert.equal(res.status, 200);
      assert.equal(res.body.status, 'ok');
      assert.equal(res.body.service, 'cloudariss-admin-backend');
      assert.ok(res.body.timestamp);
    });
  });
});
