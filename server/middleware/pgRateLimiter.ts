import crypto from 'node:crypto';
import type { Request, Response, NextFunction } from 'express';
import type { PrismaClient } from '@prisma/client';
import { getEnv } from '../config/env';

export interface RateLimitResult {
  allowed: boolean;
  points: number;
  maxPoints: number;
  resetAt: Date;
  retryAfterSeconds: number;
}

export interface RateLimiterStore {
  consume(key: string, maxPoints: number, windowMs: number): Promise<RateLimitResult>;
  reset?(key: string): Promise<void>;
}

export class MemoryRateLimiterStore implements RateLimiterStore {
  private buckets = new Map<string, { points: number; resetAt: number }>();

  async consume(key: string, maxPoints: number, windowMs: number): Promise<RateLimitResult> {
    const now = Date.now();
    const existing = this.buckets.get(key);

    if (!existing || existing.resetAt <= now) {
      const resetAt = now + windowMs;
      this.buckets.set(key, { points: 1, resetAt });
      return {
        allowed: true,
        points: 1,
        maxPoints,
        resetAt: new Date(resetAt),
        retryAfterSeconds: Math.ceil(windowMs / 1000),
      };
    }

    existing.points += 1;
    const retryAfterSeconds = Math.max(1, Math.ceil((existing.resetAt - now) / 1000));
    const allowed = existing.points <= maxPoints;

    return {
      allowed,
      points: existing.points,
      maxPoints,
      resetAt: new Date(existing.resetAt),
      retryAfterSeconds,
    };
  }

  async reset(key: string): Promise<void> {
    this.buckets.delete(key);
  }
}

export class PgRateLimiterStore implements RateLimiterStore {
  constructor(private prismaClient: PrismaClient) {}

  async consume(key: string, maxPoints: number, windowMs: number): Promise<RateLimitResult> {
    const windowExpiresAt = new Date(Date.now() + windowMs);

    // Atomic fixed-window increment / initialization using PostgreSQL UPSERT
    const result = await this.prismaClient.$queryRaw<Array<{ points: number; window_expires_at: Date }>>`
      INSERT INTO rate_limit_buckets (key, points, window_expires_at)
      VALUES (${key}, 1, ${windowExpiresAt})
      ON CONFLICT (key) DO UPDATE
      SET points = CASE
        WHEN rate_limit_buckets.window_expires_at <= NOW() THEN 1
        ELSE rate_limit_buckets.points + 1
      END,
      window_expires_at = CASE
        WHEN rate_limit_buckets.window_expires_at <= NOW() THEN ${windowExpiresAt}
        ELSE rate_limit_buckets.window_expires_at
      END
      RETURNING points, window_expires_at;
    `;

    const row = result[0];
    if (!row) {
      throw new Error('Rate limit bucket query returned empty result');
    }

    const points = Number(row.points);
    const resetAt = new Date(row.window_expires_at);
    const now = Date.now();
    const retryAfterSeconds = Math.max(1, Math.ceil((resetAt.getTime() - now) / 1000));
    const allowed = points <= maxPoints;

    return {
      allowed,
      points,
      maxPoints,
      resetAt,
      retryAfterSeconds,
    };
  }

  async reset(key: string): Promise<void> {
    await this.prismaClient.$executeRaw`DELETE FROM rate_limit_buckets WHERE key = ${key}`;
  }
}

export const getClientIp = (req: Request): string => {
  const forwarded = req.headers['x-forwarded-for'];
  if (typeof forwarded === 'string') {
    return forwarded.split(',')[0].trim();
  }
  if (Array.isArray(forwarded) && forwarded.length > 0) {
    return forwarded[0].trim();
  }
  return req.socket.remoteAddress || '127.0.0.1';
};

export const hashEmailForRateLimit = (email: string, secret: string): string => {
  const normalized = email.trim().toLowerCase();
  return crypto.createHash('sha256').update(`${normalized}:${secret}`).digest('hex');
};

export interface LoginRateLimiterOptions {
  store: RateLimiterStore;
  secret?: string;
  maxPoints?: number;
  windowMs?: number;
}

export const createLoginRateLimiter = (options: LoginRateLimiterOptions) => {
  const maxPoints = options.maxPoints ?? 5;
  const windowMs = options.windowMs ?? 15 * 60 * 1000; // 15 minutes
  const secret = options.secret ?? getEnv().RATE_LIMIT_SECRET;

  return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const ip = getClientIp(req);
      const ipKey = `login:ip:${ip}`;

      const ipResult = await options.store.consume(ipKey, maxPoints, windowMs);
      if (!ipResult.allowed) {
        res.setHeader('Retry-After', String(ipResult.retryAfterSeconds));
        res.status(429).json({
          error: 'Too Many Requests',
          message: 'Too many login attempts from this network. Please try again later.',
        });
        return;
      }

      // Check keyed email hash if email is present in request body
      const email = typeof req.body?.email === 'string' ? req.body.email.trim() : null;
      if (email) {
        const emailHash = hashEmailForRateLimit(email, secret);
        const emailKey = `login:email:${emailHash}`;

        const emailResult = await options.store.consume(emailKey, maxPoints, windowMs);
        if (!emailResult.allowed) {
          res.setHeader('Retry-After', String(emailResult.retryAfterSeconds));
          res.status(429).json({
            error: 'Too Many Requests',
            message: 'Too many login attempts for this account. Please try again later.',
          });
          return;
        }
      }

      next();
    } catch (error) {
      // Fail-closed requirement: if rate limiting fails due to database or infrastructure error,
      // fail safe with 503 instead of allowing potentially abusive traffic through.
      console.error('[RateLimiter] Database rate limit evaluation failed:', error);
      res.status(503).json({
        error: 'Service Unavailable',
        message: 'Authentication service is temporarily unavailable. Please try again shortly.',
      });
    }
  };
};
