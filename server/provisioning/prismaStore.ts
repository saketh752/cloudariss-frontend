import { Prisma, type PrismaClient } from '@prisma/client';
import type { AdminRole } from './config';
import { type ExistingAdmin, type ProvisioningStore, UniqueConflictError } from './provisionAdmins';

/**
 * Prisma-backed ProvisioningStore. Every write runs inside a transaction together with its
 * audit_logs entry. Audit payloads never include password hashes.
 */
export const createPrismaProvisioningStore = (prisma: PrismaClient): ProvisioningStore => ({
  async findByRoleOrEmail(role, email): Promise<ExistingAdmin[]> {
    const rows = await prisma.adminUser.findMany({
      where: { OR: [{ roleLabel: role }, { email }] },
      select: { id: true, email: true, roleLabel: true },
    });
    return rows.map((r) => ({ id: r.id, email: r.email, roleLabel: r.roleLabel as AdminRole }));
  },

  async createAdmin({ email, name, roleLabel, passwordHash }) {
    try {
      return await prisma.$transaction(async (tx) => {
        const created = await tx.adminUser.create({
          data: { email, name, roleLabel, passwordHash },
          select: { id: true },
        });
        await tx.auditLog.create({
          data: {
            actorId: null,
            action: 'ADMIN_PROVISIONED_CLI',
            entityType: 'admin_user',
            entityId: created.id,
            afterState: { email, name, roleLabel },
          },
        });
        return created;
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
        throw new UniqueConflictError();
      }
      throw error;
    }
  },

  async getPasswordHashByRole(role) {
    return prisma.adminUser.findUnique({
      where: { roleLabel: role },
      select: { id: true, email: true, passwordHash: true },
    });
  },

  async rotatePassword({ adminId, passwordHash }) {
    return prisma.$transaction(async (tx) => {
      const now = new Date();
      await tx.adminUser.update({
        where: { id: adminId },
        data: { passwordHash, passwordChangedAt: now },
      });
      const revoked = await tx.adminSession.updateMany({
        where: { adminUserId: adminId, revokedAt: null },
        data: { revokedAt: now },
      });
      await tx.auditLog.create({
        data: {
          actorId: null,
          action: 'ADMIN_PASSWORD_ROTATED_CLI',
          entityType: 'admin_user',
          entityId: adminId,
          afterState: { passwordChangedAt: now.toISOString(), revokedSessions: revoked.count },
        },
      });
      return { revokedSessions: revoked.count };
    });
  },
});

