import { Request, Response, NextFunction } from 'express';
import crypto from 'crypto';

export const nonceToken = async (_req: Request, res: Response, next: NextFunction) => {
  res.locals.nonce = crypto.randomBytes(16).toString('hex');
  next();
};
