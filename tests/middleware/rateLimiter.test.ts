import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import express from 'express';
import request from 'supertest';
import {
  createLoginRateLimiter,
  hashEmailForRateLimit,
  MemoryRateLimiterStore,
  type RateLimiterStore,
} from '../../server/middleware/pgRateLimiter';

describe('Rate Limiter Middleware', () => {
  it('allows requests within the configured threshold (5 per window)', async () => {
    const store = new MemoryRateLimiterStore();
    const app = express();
    app.use(express.json());
    app.post('/test-login', createLoginRateLimiter({ store, maxPoints: 5, windowMs: 60000 }), (_req, res) => {
      res.json({ ok: true });
    });

    for (let i = 0; i < 5; i++) {
      const res = await request(app)
        .post('/test-login')
        .send({ email: 'admin@cloudariss.com' });
      assert.equal(res.status, 200);
      assert.equal(res.body.ok, true);
    }
  });

  it('rejects the 6th request with 429 Too Many Requests and Retry-After header', async () => {
    const store = new MemoryRateLimiterStore();
    const app = express();
    app.use(express.json());
    app.post('/test-login', createLoginRateLimiter({ store, maxPoints: 5, windowMs: 60000 }), (_req, res) => {
      res.json({ ok: true });
    });

    for (let i = 0; i < 5; i++) {
      await request(app).post('/test-login').send({ email: 'admin@cloudariss.com' });
    }

    const blocked = await request(app).post('/test-login').send({ email: 'admin@cloudariss.com' });
    assert.equal(blocked.status, 429);
    assert.equal(blocked.body.error, 'Too Many Requests');
    assert.ok(blocked.headers['retry-after']);
    assert.ok(Number(blocked.headers['retry-after']) > 0);
  });

  it('never stores raw emails: produces SHA-256 keyed digests', () => {
    const secret = 'test-secret-salt-12345';
    const email = 'Admin@CloudAriss.com ';
    const hash = hashEmailForRateLimit(email, secret);

    assert.equal(hash.length, 64);
    assert.match(hash, /^[0-9a-f]{64}$/);
    // Same email with different casing/whitespace produces identical hash
    const hash2 = hashEmailForRateLimit('admin@cloudariss.com', secret);
    assert.equal(hash, hash2);
    // Raw email must not appear inside digest
    assert.ok(!hash.includes('cloudariss'));
  });

  it('fails closed with 503 when the rate limiter store throws an error', async () => {
    const faultyStore: RateLimiterStore = {
      async consume() {
        throw new Error('Database connection pool exhausted');
      },
    };

    const app = express();
    app.use(express.json());
    app.post('/test-login', createLoginRateLimiter({ store: faultyStore }), (_req, res) => {
      res.json({ ok: true });
    });

    const res = await request(app).post('/test-login').send({ email: 'admin@cloudariss.com' });
    assert.equal(res.status, 503);
    assert.equal(res.body.error, 'Service Unavailable');
    assert.match(res.body.message, /temporarily unavailable/i);
  });
});
