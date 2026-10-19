import { Router } from 'express';
import type { Request, Response, NextFunction } from 'express';
import { getEnv } from '../../config/env';
import {
  getSessionCookieName,
  getSessionCookieOptions,
  SESSION_COOKIE_DEV,
  SESSION_COOKIE_PROD,
} from '../../utils/session';
import { getClientIp } from '../../middleware/pgRateLimiter';
import { preLoginProtection } from '../../middleware/csrfProtection';
import { createRequireAdmin, type SessionStore } from '../../middleware/requireAdmin';
import { AuthService } from './authService';
import type { AuthRepository } from './authRepository';
import { changePasswordSchema, loginSchema } from './authTypes';

export interface AuthRouterOptions {
  authRepository: AuthRepository;
  sessionStore?: SessionStore;
  loginRateLimiter?: (req: Request, res: Response, next: NextFunction) => Promise<void> | void;
}

export const createAuthRouter = (options: AuthRouterOptions): Router => {
  const router = Router();
  const authService = new AuthService(options.authRepository);
  const requireAdmin = createRequireAdmin({
    sessionStore: options.sessionStore ?? options.authRepository,
    enforceCsrf: true,
  });

  // POST /login
  const loginMiddlewares: any[] = [preLoginProtection];
  if (options.loginRateLimiter) {
    loginMiddlewares.push(options.loginRateLimiter);
  }

  router.post(
    '/login',
    ...loginMiddlewares,
    async (req: Request, res: Response, next: NextFunction): Promise<void> => {
      try {
        const parsed = loginSchema.parse(req.body);
        const ipAddress = getClientIp(req);
        const userAgent = req.headers['user-agent'];

        const result = await authService.login(parsed, { ipAddress, userAgent });

        if (!result.success) {
          res.status(result.status).json({
            error: 'Unauthorized',
            message: result.message,
          });
          return;
        }

        const env = getEnv();
        const cookieName = getSessionCookieName(env.NODE_ENV);
        const cookieOptions = getSessionCookieOptions(env.NODE_ENV, env.SESSION_TTL_HOURS);

        res.cookie(cookieName, result.sessionToken, cookieOptions);
        res.status(200).json({
          success: true,
          user: result.user,
          csrfToken: result.csrfToken,
        });
      } catch (error) {
        next(error);
      }
    }
  );

  // POST /logout
  router.post(
    '/logout',
    requireAdmin,
    async (req: Request, res: Response, next: NextFunction): Promise<void> => {
      try {
        const env = getEnv();
        const cookieName = getSessionCookieName(env.NODE_ENV);
        const token =
          req.cookies?.[cookieName] ||
          req.cookies?.[SESSION_COOKIE_PROD] ||
          req.cookies?.[SESSION_COOKIE_DEV];

        if (token && typeof token === 'string') {
          const ipAddress = getClientIp(req);
          await authService.logout(token, req.adminUser?.id, ipAddress);
        }

        // Clear cookies (both potential variants)
        res.clearCookie(cookieName, { path: '/' });
        if (env.NODE_ENV !== 'production') {
          res.clearCookie(SESSION_COOKIE_PROD, { path: '/' });
        } else {
          res.clearCookie(SESSION_COOKIE_DEV, { path: '/' });
        }

        res.status(200).json({
          success: true,
          message: 'Logged out successfully.',
        });
      } catch (error) {
        next(error);
      }
    }
  );

  // GET /me
  router.get(
    '/me',
    requireAdmin,
    (req: Request, res: Response): void => {
      res.status(200).json({
        user: req.adminUser,
        csrfToken: req.adminSession?.csrfToken,
      });
    }
  );

  // POST /change-password
  router.post(
    '/change-password',
    requireAdmin,
    async (req: Request, res: Response, next: NextFunction): Promise<void> => {
      try {
        const parsed = changePasswordSchema.parse(req.body);
        const ipAddress = getClientIp(req);
        const userAgent = req.headers['user-agent'];
        const userId = req.adminUser!.id;

        const result = await authService.changePassword(userId, parsed, {
          ipAddress,
          userAgent,
        });

        if (!result.success) {
          res.status(result.status).json({
            error: result.status === 404 ? 'Not Found' : 'Bad Request',
            message: result.message,
          });
          return;
        }

        // Rotate session cookie
        const env = getEnv();
        const cookieName = getSessionCookieName(env.NODE_ENV);
        const cookieOptions = getSessionCookieOptions(env.NODE_ENV, env.SESSION_TTL_HOURS);

        res.cookie(cookieName, result.sessionToken, cookieOptions);
        res.status(200).json({
          success: true,
          message: result.message,
          csrfToken: result.csrfToken,
        });
      } catch (error) {
        next(error);
      }
    }
  );

  return router;
};
