import { z } from 'zod';
import type { AdminRoleLabel } from '@prisma/client';

export const loginSchema = z.object({
  email: z.string().trim().email('A valid email address is required.').max(254),
  password: z.string().min(1, 'Password is required.').max(255),
});

export type LoginInput = z.infer<typeof loginSchema>;

export const changePasswordSchema = z.object({
  currentPassword: z.string().min(1, 'Current password is required.'),
  newPassword: z
    .string()
    .min(12, 'New password must be at least 12 characters long.')
    .max(128, 'New password must not exceed 128 characters.')
    .refine((val) => !/placeholder|change_me/i.test(val), {
      message: 'New password cannot contain placeholder terms.',
    }),
});

export type ChangePasswordInput = z.infer<typeof changePasswordSchema>;

export interface AdminUserPublic {
  id: string;
  email: string;
  name: string;
  roleLabel: AdminRoleLabel;
}

export interface LoginSuccessResponse {
  success: true;
  user: AdminUserPublic;
  csrfToken: string;
}

export interface MeResponse {
  user: AdminUserPublic;
  csrfToken: string;
}

export interface ChangePasswordResponse {
  success: true;
  message: string;
  csrfToken: string;
}
