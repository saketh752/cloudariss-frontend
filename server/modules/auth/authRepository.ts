import type { AdminRoleLabel, PrismaClient } from '@prisma/client';
import type { SessionLookupResult, SessionStore } from '../../middleware/requireAdmin';

export interface UserRecord {
  id: string;
  email: string;
  name: string;
  roleLabel: AdminRoleLabel;
  passwordHash: string;
  isActive: boolean;
  passwordChangedAt: Date;
  lastLoginAt: Date | null;
}

export interface SessionRecord {
  id: string;
  adminUserId: string;
  tokenHash: string;
  csrfToken: string;
  ipAddress: string | null;
  userAgent: string | null;
  expiresAt: Date;
  revokedAt: Date | null;
  lastSeenAt: Date | null;
  createdAt: Date;
}

export interface CreateSessionParams {
  adminUserId: string;
  tokenHash: string;
  csrfToken: string;
  ipAddress?: string;
  userAgent?: string;
  expiresAt: Date;
}

export interface AuthRepository extends SessionStore {
  findUserByEmail(email: string): Promise<UserRecord | null>;
  findUserById(id: string): Promise<UserRecord | null>;
  updateUserLastLogin(id: string): Promise<void>;
  updateUserPassword(id: string, passwordHash: string): Promise<void>;
  createSession(params: CreateSessionParams): Promise<SessionRecord>;
  revokeSession(tokenHash: string): Promise<void>;
  revokeAllUserSessions(adminUserId: string): Promise<void>;
  createAuditLog(params: {
    actorId?: string;
    action: string;
    entityType: string;
    entityId: string;
    reason?: string;
    ipAddress?: string;
  }): Promise<void>;
}

export class PrismaAuthRepository implements AuthRepository {
  constructor(private prisma: PrismaClient) {}

  async findUserByEmail(email: string): Promise<UserRecord | null> {
    return this.prisma.adminUser.findUnique({
      where: { email: email.trim().toLowerCase() },
    });
  }

  async findUserById(id: string): Promise<UserRecord | null> {
    return this.prisma.adminUser.findUnique({
      where: { id },
    });
  }

  async updateUserLastLogin(id: string): Promise<void> {
    await this.prisma.adminUser.update({
      where: { id },
      data: { lastLoginAt: new Date() },
    });
  }

  async updateUserPassword(id: string, passwordHash: string): Promise<void> {
    await this.prisma.adminUser.update({
      where: { id },
      data: {
        passwordHash,
        passwordChangedAt: new Date(),
      },
    });
  }

  async createSession(params: CreateSessionParams): Promise<SessionRecord> {
    return this.prisma.adminSession.create({
      data: {
        adminUserId: params.adminUserId,
        tokenHash: params.tokenHash,
        csrfToken: params.csrfToken,
        ipAddress: params.ipAddress ?? null,
        userAgent: params.userAgent ?? null,
        expiresAt: params.expiresAt,
      },
    });
  }

  async findActiveSession(tokenHash: string): Promise<SessionLookupResult | null> {
    const record = await this.prisma.adminSession.findUnique({
      where: { tokenHash },
      include: { adminUser: true },
    });

    if (!record || record.revokedAt !== null || record.expiresAt.getTime() <= Date.now()) {
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

  async revokeSession(tokenHash: string): Promise<void> {
    await this.prisma.adminSession.updateMany({
      where: { tokenHash, revokedAt: null },
      data: { revokedAt: new Date() },
    });
  }

  async revokeAllUserSessions(adminUserId: string): Promise<void> {
    await this.prisma.adminSession.updateMany({
      where: { adminUserId, revokedAt: null },
      data: { revokedAt: new Date() },
    });
  }

  async createAuditLog(params: {
    actorId?: string;
    action: string;
    entityType: string;
    entityId: string;
    reason?: string;
    ipAddress?: string;
  }): Promise<void> {
    await this.prisma.auditLog.create({
      data: {
        actorId: params.actorId ?? null,
        action: params.action,
        entityType: params.entityType,
        entityId: params.entityId,
        reason: params.reason ?? null,
        ipAddress: params.ipAddress ?? null,
      },
    });
  }
}

export class MemoryAuthRepository implements AuthRepository {
  users = new Map<string, UserRecord>();
  sessions = new Map<string, SessionRecord>();
  auditLogs: Array<{
    actorId?: string;
    action: string;
    entityType: string;
    entityId: string;
    reason?: string;
    ipAddress?: string;
    createdAt: Date;
  }> = [];

  constructor(initialUsers: UserRecord[] = []) {
    for (const u of initialUsers) {
      this.users.set(u.id, { ...u });
    }
  }

  async findUserByEmail(email: string): Promise<UserRecord | null> {
    const normalized = email.trim().toLowerCase();
    for (const u of this.users.values()) {
      if (u.email.toLowerCase() === normalized) {
        return { ...u };
      }
    }
    return null;
  }

  async findUserById(id: string): Promise<UserRecord | null> {
    const u = this.users.get(id);
    return u ? { ...u } : null;
  }

  async updateUserLastLogin(id: string): Promise<void> {
    const u = this.users.get(id);
    if (u) {
      u.lastLoginAt = new Date();
    }
  }

  async updateUserPassword(id: string, passwordHash: string): Promise<void> {
    const u = this.users.get(id);
    if (u) {
      u.passwordHash = passwordHash;
      u.passwordChangedAt = new Date();
    }
  }

  async createSession(params: CreateSessionParams): Promise<SessionRecord> {
    const session: SessionRecord = {
      id: `session-${Date.now()}-${Math.random()}`,
      adminUserId: params.adminUserId,
      tokenHash: params.tokenHash,
      csrfToken: params.csrfToken,
      ipAddress: params.ipAddress ?? null,
      userAgent: params.userAgent ?? null,
      expiresAt: params.expiresAt,
      revokedAt: null,
      lastSeenAt: null,
      createdAt: new Date(),
    };
    this.sessions.set(params.tokenHash, session);
    return { ...session };
  }

  async findActiveSession(tokenHash: string): Promise<SessionLookupResult | null> {
    const session = this.sessions.get(tokenHash);
    if (!session || session.revokedAt !== null || session.expiresAt.getTime() <= Date.now()) {
      return null;
    }
    const user = this.users.get(session.adminUserId);
    if (!user || !user.isActive) {
      return null;
    }

    return {
      session: {
        id: session.id,
        adminUserId: session.adminUserId,
        tokenHash: session.tokenHash,
        csrfToken: session.csrfToken,
        expiresAt: session.expiresAt,
        revokedAt: session.revokedAt,
      },
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        roleLabel: user.roleLabel,
        isActive: user.isActive,
      },
    };
  }

  async revokeSession(tokenHash: string): Promise<void> {
    const session = this.sessions.get(tokenHash);
    if (session && session.revokedAt === null) {
      session.revokedAt = new Date();
    }
  }

  async revokeAllUserSessions(adminUserId: string): Promise<void> {
    for (const session of this.sessions.values()) {
      if (session.adminUserId === adminUserId && session.revokedAt === null) {
        session.revokedAt = new Date();
      }
    }
  }

  async createAuditLog(params: {
    actorId?: string;
    action: string;
    entityType: string;
    entityId: string;
    reason?: string;
    ipAddress?: string;
  }): Promise<void> {
    this.auditLogs.push({ ...params, createdAt: new Date() });
  }
}
