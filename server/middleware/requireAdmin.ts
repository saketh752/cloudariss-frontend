import type { Request, Response, NextFunction } from 'express';
import type { PrismaClient } from '@prisma/client';
import { getEnv } from '../config/env';
import {
  getSessionCookieName,
  hashSessionToken,
  SESSION_COOKIE_DEV,
  SESSION_COOKIE_PROD,
} from '../utils/session';
import type { AuthenticatedAdminSession, AuthenticatedAdminUser } from '../types/express';
import { verifyCsrfToken } from './csrfProtection';
import { prisma as defaultPrisma } from '../db/prisma';

export interface SessionLookupResult {
  session: AuthenticatedAdminSession;
  user: AuthenticatedAdminUser;
}

export interface SessionStore {
  findActiveSession(tokenHash: string): Promise<SessionLookupResult | null>;
  revokeSession?(tokenHash: string): Promise<void>;
}

export class PrismaSessionStore implements SessionStore {
  constructor(private client: PrismaClient) {}

  async findActiveSession(tokenHash: string): Promise<SessionLookupResult | null> {
    const record = await this.client.adminSession.findUnique({
      where: { tokenHash },
      include: { adminUser: true },
    });

    if (!record) {
      return null;
    }

    if (record.revokedAt !== null) {
      return null;
    }

    if (record.expiresAt.getTime() <= Date.now()) {
      return null;
    }

    if (!record.adminUser || !record.adminUser.isActive) {
      return null;
    }

    return {
      session: {
        id: record.id,
        adminUserId: record.adminUserId,
        tokenHash: record.tokenHash,
        csrfToken: record.csrfToken,
        expiresAt: record.expiresAt,
        revokedAt: record.revokedAt,
      },
      user: {
        id: record.adminUser.id,
        email: record.adminUser.email,
        name: record.adminUser.name,
        roleLabel: record.adminUser.roleLabel,
        isActive: record.adminUser.isActive,
      },
    };
  }
}

export interface RequireAdminOptions {
  sessionStore?: SessionStore;
  enforceCsrf?: boolean;
}

export const createRequireAdmin = (options: RequireAdminOptions = {}) => {
  const store = options.sessionStore ?? new PrismaSessionStore(defaultPrisma);
  const enforceCsrf = options.enforceCsrf ?? true;

  return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const nodeEnv = getEnv().NODE_ENV;
      const expectedCookieName = getSessionCookieName(nodeEnv);

      // Check expected cookie, with fallback to dev/prod cookie names
      const token =
        req.cookies?.[expectedCookieName] ||
        req.cookies?.[SESSION_COOKIE_PROD] ||
        req.cookies?.[SESSION_COOKIE_DEV];

      if (!token || typeof token !== 'string') {
        res.status(401).json({
          error: 'Unauthorized',
          message: 'Authentication session required.',
        });
        return;
      }

      const tokenHash = hashSessionToken(token);
      const lookup = await store.findActiveSession(tokenHash);

      if (!lookup) {
        res.status(401).json({
          error: 'Unauthorized',
          message: 'Session has expired or is invalid.',
        });
        return;
      }

      req.adminUser = lookup.user;
      req.adminSession = lookup.session;

      // For mutating requests, enforce session-bound CSRF token
      if (enforceCsrf) {
        verifyCsrfToken(req, res, next);
      } else {
        next();
      }
    } catch (error) {
      console.error('[requireAdmin] Authentication error:', error);
      res.status(500).json({
        error: 'Internal Server Error',
        message: 'Failed to verify session.',
      });
    }
  };
};
