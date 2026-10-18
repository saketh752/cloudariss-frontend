import { hash, verify } from '@node-rs/argon2';

/**
 * Argon2id password hashing (library default algorithm is Argon2id).
 * Parameters follow the OWASP Password Storage Cheat Sheet minimum for Argon2id:
 * m = 19 MiB, t = 2, p = 1.
 */
const ARGON2_OPTIONS = {
  memoryCost: 19456,
  timeCost: 2,
  parallelism: 1,
  outputLen: 32,
} as const;

export const hashPassword = (password: string): Promise<string> => hash(password, ARGON2_OPTIONS);

/** Returns false (never throws) for malformed hashes so callers can respond generically. */
export const verifyPassword = async (passwordHash: string, password: string): Promise<boolean> => {
  try {
    return await verify(passwordHash, password);
  } catch {
    return false;
  }
};

export const argon2Hasher = { hash: hashPassword, verify: verifyPassword };

