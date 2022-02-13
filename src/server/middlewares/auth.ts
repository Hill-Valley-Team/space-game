import { authApi } from 'api/Auth';
import { Request, Response, NextFunction } from 'express';

export const auth = async (request: Request, response: Response, next: NextFunction) => {
  response.locals.user = undefined;

  try {
    const { data, status } = await authApi.getUserInfo({
      headers: { cookie: request.headers.cookie! },
    });
    // console.log(data, status);
    if (status === 200) {
      response.locals.user = data;
    }
  } catch (error: unknown) {
    response.locals.error = error;
    // console.log(error);
  } finally {
    next();
  }
};
