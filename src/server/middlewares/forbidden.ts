import { Request, Response, NextFunction } from 'express';

export const forbidden = async (_request: Request, response: Response, next: NextFunction) => {
  if (response.locals.user === undefined) {
    return response.sendStatus(403);
  }
  next();
};
