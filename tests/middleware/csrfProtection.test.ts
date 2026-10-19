import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import express from 'express';
import request from 'supertest';
import {
  createOriginValidator,
  preLoginProtection,
  verifyCsrfToken,
} from '../../server/middleware/csrfProtection';

describe('CSRF & Exact Origin Protection', () => {
  const TRUSTED_ORIGIN = 'http://localhost:5173';

  describe('createOriginValidator', () => {
    const app = express();
    app.use(createOriginValidator(TRUSTED_ORIGIN));
    app.get('/api/test', (_req, res) => res.json({ ok: true }));
    app.post('/api/test', (_req, res) => res.json({ created: true }));

    it('allows requests matching trusted origin exactly', async () => {
      const res = await request(app)
        .get('/api/test')
        .set('Origin', TRUSTED_ORIGIN);
      assert.equal(res.status, 200);
      assert.equal(res.headers['access-control-allow-origin'], TRUSTED_ORIGIN);
      assert.equal(res.headers['access-control-allow-credentials'], 'true');
    });

    it('rejects untrusted origin with 403 Forbidden', async () => {
      const res = await request(app)
        .get('/api/test')
        .set('Origin', 'https://attacker.com');
      assert.equal(res.status, 403);
      assert.equal(res.body.error, 'Forbidden');
    });

    it('rejects origin substrings, prefixes, and domain variations', async () => {
      const spoofedOrigins = [
        'http://localhost:5173.attacker.com',
        'http://evil-localhost:5173',
        'http://localhost:51730',
        'https://localhost:5173',
      ];
      for (const origin of spoofedOrigins) {
        const res = await request(app).get('/api/test').set('Origin', origin);
        assert.equal(res.status, 403, `Failed to reject: ${origin}`);
      }
    });

    it('responds to OPTIONS preflight with 204 and CORS headers', async () => {
      const res = await request(app)
        .options('/api/test')
        .set('Origin', TRUSTED_ORIGIN);
      assert.equal(res.status, 204);
      assert.equal(res.headers['access-control-allow-origin'], TRUSTED_ORIGIN);
      assert.ok(res.headers['access-control-allow-methods']);
    });
  });

  describe('preLoginProtection', () => {
    const app = express();
    app.use(express.json());
    app.use(createOriginValidator(TRUSTED_ORIGIN));
    app.post('/api/login', preLoginProtection, (_req, res) => res.json({ ok: true }));

    it('accepts application/json with matching Origin', async () => {
      const res = await request(app)
        .post('/api/login')
        .set('Origin', TRUSTED_ORIGIN)
        .set('Content-Type', 'application/json')
        .send({ test: true });
      assert.equal(res.status, 200);
    });

    it('accepts application/json with X-Requested-With: CloudarissAdmin', async () => {
      const res = await request(app)
        .post('/api/login')
        .set('X-Requested-With', 'CloudarissAdmin')
        .set('Content-Type', 'application/json')
        .send({ test: true });
      assert.equal(res.status, 200);
    });

    it('rejects non-JSON Content-Type with 415 Unsupported Media Type', async () => {
      const res = await request(app)
        .post('/api/login')
        .set('Origin', TRUSTED_ORIGIN)
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .send('user=admin&pass=secret');
      assert.equal(res.status, 415);
      assert.equal(res.body.error, 'Unsupported Media Type');
    });

    it('rejects Sec-Fetch-Site: cross-site with 403 Forbidden', async () => {
      const res = await request(app)
        .post('/api/login')
        .set('Origin', TRUSTED_ORIGIN)
        .set('Sec-Fetch-Site', 'cross-site')
        .set('Content-Type', 'application/json')
        .send({ test: true });
      assert.equal(res.status, 403);
      assert.match(res.body.message, /cross-site/i);
    });

    it('rejects requests lacking both Origin and X-Requested-With header', async () => {
      const res = await request(app)
        .post('/api/login')
        .set('Content-Type', 'application/json')
        .send({ test: true });
      assert.equal(res.status, 403);
      assert.match(res.body.message, /matching Origin or X-Requested-With/i);
    });
  });

  describe('verifyCsrfToken', () => {
    const validCsrf = 'a1b2c3d4e5f60718293a4b5c6d7e8f90a1b2c3d4e5f60718293a4b5c6d7e8f90';
    const app = express();
    app.use(express.json());
    // Simulate requireAdmin attaching session
    app.use((req, _res, next) => {
      (req as any).adminSession = { csrfToken: validCsrf };
      next();
    });
    app.post('/api/mutate', verifyCsrfToken, (_req, res) => res.json({ mutated: true }));
    app.get('/api/read', verifyCsrfToken, (_req, res) => res.json({ safe: true }));

    it('allows GET requests without CSRF token', async () => {
      const res = await request(app).get('/api/read');
      assert.equal(res.status, 200);
      assert.equal(res.body.safe, true);
    });

    it('allows mutating request with matching X-CSRF-Token', async () => {
      const res = await request(app)
        .post('/api/mutate')
        .set('X-CSRF-Token', validCsrf);
      assert.equal(res.status, 200);
      assert.equal(res.body.mutated, true);
    });

    it('rejects mutating request with missing X-CSRF-Token', async () => {
      const res = await request(app).post('/api/mutate');
      assert.equal(res.status, 403);
      assert.match(res.body.message, /CSRF token missing/i);
    });

    it('rejects mutating request with invalid or mismatched X-CSRF-Token', async () => {
      const invalidTokens = [
        'invalid-csrf-token',
        'a1b2c3d4e5f60718293a4b5c6d7e8f90a1b2c3d4e5f60718293a4b5c6d7e8f91', // 1 bit different
        '',
      ];
      for (const token of invalidTokens) {
        const res = await request(app)
          .post('/api/mutate')
          .set('X-CSRF-Token', token);
        assert.equal(res.status, 403);
      }
    });
  });
});
