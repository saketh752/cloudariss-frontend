import { getEnv } from '../../config/env';
import { hashPassword, verifyPassword } from '../../utils/password';
import {
  generateCsrfToken,
  generateSessionToken,
  hashSessionToken,
} from '../../utils/session';
import { runDummyPasswordCheck } from '../../utils/timingGuard';
import type { AuthRepository } from './authRepository';
import type { ChangePasswordInput, LoginInput, AdminUserPublic } from './authTypes';

export interface LoginResultSuccess {
  success: true;
  user: AdminUserPublic;
  sessionToken: string;
  csrfToken: string;
}

export interface LoginResultFailure {
  success: false;
  status: number;
  message: string;
}

export type LoginResult = LoginResultSuccess | LoginResultFailure;

export interface ChangePasswordResultSuccess {
  success: true;
  sessionToken: string;
  csrfToken: string;
  message: string;
}

export interface ChangePasswordResultFailure {
  success: false;
  status: number;
  message: string;
}

export type ChangePasswordResult = ChangePasswordResultSuccess | ChangePasswordResultFailure;

export class AuthService {
  constructor(private repo: AuthRepository) {}

  async login(
    input: LoginInput,
    metadata: { ipAddress?: string; userAgent?: string }
  ): Promise<LoginResult> {
    const user = await this.repo.findUserByEmail(input.email);

    if (!user || !user.isActive) {
      // Execute dummy Argon2id verification so execution time mimics valid account verification
      await runDummyPasswordCheck(input.password);
      return {
        success: false,
        status: 401,
        message: 'Invalid email or password.',
      };
    }

    const isValid = await verifyPassword(user.passwordHash, input.password);
    if (!isValid) {
      return {
        success: false,
        status: 401,
        message: 'Invalid email or password.',
      };
    }

    const env = getEnv();
    const sessionToken = generateSessionToken();
    const tokenHash = hashSessionToken(sessionToken);
    const csrfToken = generateCsrfToken();
    const expiresAt = new Date(Date.now() + env.SESSION_TTL_HOURS * 60 * 60 * 1000);

    await this.repo.createSession({
      adminUserId: user.id,
      tokenHash,
      csrfToken,
      ipAddress: metadata.ipAddress,
      userAgent: metadata.userAgent,
      expiresAt,
    });

    await this.repo.updateUserLastLogin(user.id);

    await this.repo.createAuditLog({
      actorId: user.id,
      action: 'ADMIN_LOGIN_SUCCESS',
      entityType: 'AdminUser',
      entityId: user.id,
      ipAddress: metadata.ipAddress,
    });

    return {
      success: true,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        roleLabel: user.roleLabel,
      },
      sessionToken,
      csrfToken,
    };
  }

  async logout(sessionToken: string, userId?: string, ipAddress?: string): Promise<void> {
    const tokenHash = hashSessionToken(sessionToken);
    await this.repo.revokeSession(tokenHash);

    if (userId) {
      await this.repo.createAuditLog({
        actorId: userId,
        action: 'ADMIN_LOGOUT',
        entityType: 'AdminUser',
        entityId: userId,
        ipAddress,
      });
    }
  }

  async changePassword(
    userId: string,
    input: ChangePasswordInput,
    metadata: { ipAddress?: string; userAgent?: string }
  ): Promise<ChangePasswordResult> {
    const user = await this.repo.findUserById(userId);
    if (!user) {
      return {
        success: false,
        status: 404,
        message: 'User account not found.',
      };
    }

    const isCurrentValid = await verifyPassword(user.passwordHash, input.currentPassword);
    if (!isCurrentValid) {
      return {
        success: false,
        status: 400,
        message: 'Current password is incorrect.',
      };
    }

    if (input.currentPassword === input.newPassword) {
      return {
        success: false,
        status: 400,
        message: 'New password cannot be the same as the current password.',
      };
    }

    const newHash = await hashPassword(input.newPassword);
    await this.repo.updateUserPassword(user.id, newHash);

    // Revoke all existing sessions for this user
    await this.repo.revokeAllUserSessions(user.id);

    // Rotate session and CSRF token: create a fresh active session
    const env = getEnv();
    const sessionToken = generateSessionToken();
    const tokenHash = hashSessionToken(sessionToken);
    const csrfToken = generateCsrfToken();
    const expiresAt = new Date(Date.now() + env.SESSION_TTL_HOURS * 60 * 60 * 1000);

    await this.repo.createSession({
      adminUserId: user.id,
      tokenHash,
      csrfToken,
      ipAddress: metadata.ipAddress,
      userAgent: metadata.userAgent,
      expiresAt,
    });

    await this.repo.createAuditLog({
      actorId: user.id,
      action: 'ADMIN_PASSWORD_CHANGED',
      entityType: 'AdminUser',
      entityId: user.id,
      ipAddress: metadata.ipAddress,
    });

    return {
      success: true,
      message: 'Password updated successfully.',
      sessionToken,
      csrfToken,
    };
  }
}
