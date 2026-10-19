import { verifyPassword } from './password';

/**
 * Static pre-computed Argon2id hash with m=19MiB, t=2, p=1.
 * Used when an authentication attempt specifies an unknown email, ensuring
 * response latency is indistinguishable from verifying an existing user's hash,
 * preventing username/email enumeration via timing side-channels.
 */
export const DUMMY_PASSWORD_HASH =
  '$argon2id$v=19$m=19456,t=2,p=1$Cj7QKJkNpqx3gHXGCDOroA$ky9xWcu2lD4c3p3aMB0LXFMB2I1OBq+rB0zcdKpDz94';

export const runDummyPasswordCheck = async (password: string): Promise<boolean> => {
  await verifyPassword(DUMMY_PASSWORD_HASH, password);
  return false;
};
