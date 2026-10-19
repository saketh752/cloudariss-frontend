import { z } from 'zod';

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  PORT: z.coerce.number().int().min(1).max(65535).default(4000),
  CORS_ORIGIN: z.string().min(1).default('http://localhost:5173'),
  SESSION_TTL_HOURS: z.coerce.number().int().min(1).max(168).default(12),
  RATE_LIMIT_SECRET: z.string().min(16).default('cloudariss-rate-limit-salt-dev-2026'),
  DATABASE_URL: z.string().optional(),
  DIRECT_URL: z.string().optional(),
});

export type ServerEnv = z.infer<typeof envSchema>;

let cachedEnv: ServerEnv | null = null;

export const loadEnv = (overrides?: Partial<Record<string, string>>): ServerEnv => {
  const source = overrides ? { ...process.env, ...overrides } : process.env;
  const parsed = envSchema.safeParse(source);

  if (!parsed.success) {
    const issues = parsed.error.issues.map((i) => `  - ${i.path.join('.')}: ${i.message}`).join('\n');
    throw new Error(`Invalid server environment configuration:\n${issues}`);
  }

  return parsed.data;
};

export const getEnv = (): ServerEnv => {
  if (!cachedEnv) {
    cachedEnv = loadEnv();
  }
  return cachedEnv;
};
