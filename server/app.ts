import express from 'express';
import type { Express } from 'express';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import type { PrismaClient } from '@prisma/client';
import { getEnv } from './config/env';
import { prisma as defaultPrisma } from './db/prisma';
import { createOriginValidator } from './middleware/csrfProtection';
import { errorHandler } from './middleware/errorHandler';
import {
  createLoginRateLimiter,
  MemoryRateLimiterStore,
  PgRateLimiterStore,
  type RateLimiterStore,
} from './middleware/pgRateLimiter';
import {
  PrismaAuthRepository,
  type AuthRepository,
} from './modules/auth/authRepository';
import { createAuthRouter } from './modules/auth/authRoutes';

export interface AppOptions {
  prismaClient?: PrismaClient;
  authRepository?: AuthRepository;
  rateLimiterStore?: RateLimiterStore;
  corsOrigin?: string;
  skipRateLimiter?: boolean;
}

export const createApp = (options: AppOptions = {}): Express => {
  const app = express();
  const env = getEnv();

  // 1. Security headers via Helmet
  app.use(
    helmet({
      contentSecurityPolicy: false, // API server; frontend handles own CSP or Vercel headers
      crossOriginEmbedderPolicy: false,
    })
  );

  // 2. Strict exact-match origin validation & CORS headers
  app.use(createOriginValidator(options.corsOrigin ?? env.CORS_ORIGIN));

  // 3. Cookie parser for session authentication
  app.use(cookieParser());

  // 4. Strictly bounded JSON payload (64KB limit)
  app.use(express.json({ limit: '64kb' }));

  // 5. Health check endpoint
  app.get('/api/health', (_req, res) => {
    res.status(200).json({
      status: 'ok',
      service: 'cloudariss-admin-backend',
      timestamp: new Date().toISOString(),
    });
  });

  // 6. Auth repository and rate limiter store setup
  const prismaClient = options.prismaClient ?? defaultPrisma;
  const authRepository = options.authRepository ?? new PrismaAuthRepository(prismaClient);

  let rateLimiterStore = options.rateLimiterStore;
  if (!rateLimiterStore) {
    if (env.DATABASE_URL) {
      rateLimiterStore = new PgRateLimiterStore(prismaClient);
    } else {
      rateLimiterStore = new MemoryRateLimiterStore();
    }
  }

  const loginRateLimiter = options.skipRateLimiter
    ? undefined
    : createLoginRateLimiter({ store: rateLimiterStore });

  // 7. Mount Admin Auth routes at /api/admin/auth
  app.use(
    '/api/admin/auth',
    createAuthRouter({
      authRepository,
      loginRateLimiter,
    })
  );

  // 8. 404 handler for API routes
  app.use('/api', (_req, res) => {
    res.status(404).json({
      error: 'Not Found',
      message: 'API route not found.',
    });
  });

  // 9. Centralized error handling
  app.use(errorHandler);

  return app;
};
