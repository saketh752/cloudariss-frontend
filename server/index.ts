import { createApp } from './app';
import { getEnv } from './config/env';

const env = getEnv();
const app = createApp();

const server = app.listen(env.PORT, () => {
  console.log(`[Cloudariss Admin] Server running in ${env.NODE_ENV} mode on port ${env.PORT}`);
  console.log(`[Cloudariss Admin] Configured trusted origin: ${env.CORS_ORIGIN}`);
});

const gracefulShutdown = (signal: string) => {
  console.log(`[Cloudariss Admin] Received ${signal}. Closing HTTP server...`);
  server.close(() => {
    console.log('[Cloudariss Admin] HTTP server closed gracefully.');
    process.exit(0);
  });

  // Force close after 10s if hanging
  setTimeout(() => {
    console.error('[Cloudariss Admin] Forced shutdown after timeout.');
    process.exit(1);
  }, 10000).unref();
};

process.on('SIGINT', () => gracefulShutdown('SIGINT'));
process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
