import type { AdminRoleLabel } from '@prisma/client';

export interface AuthenticatedAdminUser {
  id: string;
  email: string;
  name: string;
  roleLabel: AdminRoleLabel;
  isActive: boolean;
}

export interface AuthenticatedAdminSession {
  id: string;
  adminUserId: string;
  tokenHash: string;
  csrfToken: string;
  expiresAt: Date;
  revokedAt: Date | null;
}

declare global {
  namespace Express {
    interface Request {
      adminUser?: AuthenticatedAdminUser;
      adminSession?: AuthenticatedAdminSession;
    }
  }
}
