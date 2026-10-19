import crypto from 'node:crypto';
import type { CookieOptions } from 'express';

export const SESSION_COOKIE_PROD = '__Host-cld_admin_sid';
export const SESSION_COOKIE_DEV = 'cld_admin_sid';

export const getSessionCookieName = (nodeEnv: string): string => {
  return nodeEnv === 'production' ? SESSION_COOKIE_PROD : SESSION_COOKIE_DEV;
};

export const getSessionCookieOptions = (nodeEnv: string, ttlHours: number): CookieOptions => {
  const isProd = nodeEnv === 'production';
  return {
    httpOnly: true,
    secure: isProd,
    sameSite: 'strict',
    path: '/',
    maxAge: ttlHours * 60 * 60 * 1000,
  };
};

export const generateSessionToken = (): string => {
  return crypto.randomBytes(32).toString('hex');
};

export const hashSessionToken = (token: string): string => {
  return crypto.createHash('sha256').update(token).digest('hex');
};

export const generateCsrfToken = (): string => {
  return crypto.randomBytes(32).toString('hex');
};

export const verifyTimingSafe = (a: string, b: string): boolean => {
  if (typeof a !== 'string' || typeof b !== 'string') {
    return false;
  }
  const bufA = Buffer.from(a, 'utf8');
  const bufB = Buffer.from(b, 'utf8');
  if (bufA.length !== bufB.length) {
    return false;
  }
  return crypto.timingSafeEqual(bufA, bufB);
};
