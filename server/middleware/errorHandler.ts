import type { Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod';
import { getEnv } from '../config/env';

export const errorHandler = (
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction
): void => {
  // JSON parse error from express.json()
  if (err instanceof SyntaxError && 'status' in err && err.status === 400 && 'body' in err) {
    res.status(400).json({
      error: 'Bad Request',
      message: 'Invalid JSON payload.',
    });
    return;
  }

  // Payload too large error from express.json({ limit: '64kb' })
  if (err.type === 'entity.too.large' || err.status === 413) {
    res.status(413).json({
      error: 'Payload Too Large',
      message: 'Request payload exceeds 64KB limit.',
    });
    return;
  }

  // Zod validation errors
  if (err instanceof ZodError) {
    const details = err.issues.map((i) => ({
      field: i.path.join('.'),
      message: i.message,
    }));
    res.status(400).json({
      error: 'Bad Request',
      message: 'Validation failed.',
      details,
    });
    return;
  }

  // Explicit status on custom errors
  const statusCode = typeof err.statusCode === 'number' ? err.statusCode : typeof err.status === 'number' ? err.status : 500;
  const isProd = getEnv().NODE_ENV === 'production';

  console.error('[UnhandledError]', err);

  res.status(statusCode).json({
    error: statusCode === 500 ? 'Internal Server Error' : err.name || 'Error',
    message: statusCode === 500 && isProd ? 'An unexpected error occurred.' : err.message || 'Internal server error.',
  });
};
