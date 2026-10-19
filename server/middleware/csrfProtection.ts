import type { Request, Response, NextFunction } from 'express';
import { getEnv } from '../config/env';
import { verifyTimingSafe } from '../utils/session';

/**
 * Validates that any supplied Origin or Referer matches the configured CORS_ORIGIN
 * with strict string equality (===). Wildcards, substrings, or reflected origins
 * are strictly forbidden.
 */
export const createOriginValidator = (expectedOrigin?: string) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const trustedOrigin = expectedOrigin ?? getEnv().CORS_ORIGIN;
    const origin = req.headers.origin;

    if (origin) {
      if (origin !== trustedOrigin) {
        res.status(403).json({
          error: 'Forbidden',
          message: 'Cross-origin request rejected: untrusted origin.',
        });
        return;
      }
      res.setHeader('Access-Control-Allow-Origin', trustedOrigin);
      res.setHeader('Access-Control-Allow-Credentials', 'true');
    }

    if (req.method === 'OPTIONS') {
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-CSRF-Token, X-Requested-With');
      res.setHeader('Access-Control-Max-Age', '86400');
      res.status(204).end();
      return;
    }

    // For mutating HTTP methods without Origin, inspect Referer if present
    const mutatingMethods = ['POST', 'PUT', 'PATCH', 'DELETE'];
    if (mutatingMethods.includes(req.method) && !origin) {
      const referer = req.headers.referer;
      if (referer) {
        try {
          const refererOrigin = new URL(referer).origin;
          if (refererOrigin !== trustedOrigin) {
            res.status(403).json({
              error: 'Forbidden',
              message: 'Cross-origin request rejected: untrusted referer.',
            });
            return;
          }
        } catch {
          res.status(403).json({
            error: 'Forbidden',
            message: 'Cross-origin request rejected: malformed referer.',
          });
          return;
        }
      }
    }

    next();
  };
};

/**
 * Pre-login protection for unauthenticated endpoints (e.g. POST /api/admin/auth/login).
 * Enforces JSON content-type, rejects Sec-Fetch-Site: cross-site, and verifies custom header
 * or matching origin to guarantee standard HTML form cross-site requests are rejected.
 */
export const preLoginProtection = (req: Request, res: Response, next: NextFunction): void => {
  // Reject cross-site fetch metadata if browser provides it
  const secFetchSite = req.headers['sec-fetch-site'];
  if (secFetchSite === 'cross-site') {
    res.status(403).json({
      error: 'Forbidden',
      message: 'Cross-site request blocked by browser security metadata.',
    });
    return;
  }

  // Ensure JSON content-type
  const contentType = req.headers['content-type'];
  if (!contentType || !contentType.toLowerCase().includes('application/json')) {
    res.status(415).json({
      error: 'Unsupported Media Type',
      message: 'Requests must use Content-Type: application/json.',
    });
    return;
  }

  // Must have matching origin OR custom header X-Requested-With: CloudarissAdmin
  const requestedWith = req.headers['x-requested-with'];
  const origin = req.headers.origin;
  const envOrigin = getEnv().CORS_ORIGIN;

  const hasValidOrigin = origin && origin === envOrigin;
  const hasValidCustomHeader = requestedWith === 'CloudarissAdmin';

  if (!hasValidOrigin && !hasValidCustomHeader) {
    res.status(403).json({
      error: 'Forbidden',
      message: 'Pre-login requests require matching Origin or X-Requested-With header.',
    });
    return;
  }

  next();
};

/**
 * Verifies that mutating requests on authenticated admin sessions contain a valid X-CSRF-Token
 * that matches the session's recorded csrfToken in constant time.
 */
export const verifyCsrfToken = (req: Request, res: Response, next: NextFunction): void => {
  const mutatingMethods = ['POST', 'PUT', 'PATCH', 'DELETE'];
  if (!mutatingMethods.includes(req.method)) {
    next();
    return;
  }

  const session = req.adminSession;
  if (!session) {
    res.status(401).json({
      error: 'Unauthorized',
      message: 'Authentication session required.',
    });
    return;
  }

  const tokenHeader = req.headers['x-csrf-token'];
  if (typeof tokenHeader !== 'string' || !tokenHeader) {
    res.status(403).json({
      error: 'Forbidden',
      message: 'CSRF token missing in X-CSRF-Token header.',
    });
    return;
  }

  if (!verifyTimingSafe(tokenHeader, session.csrfToken)) {
    res.status(403).json({
      error: 'Forbidden',
      message: 'Invalid CSRF token.',
    });
    return;
  }

  next();
};
