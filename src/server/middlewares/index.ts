import { RequestHandler } from 'express';
import cookieParserMiddleware from 'cookie-parser';
import csrfMiddleware from 'csurf';

const cookieParser: RequestHandler = cookieParserMiddleware();
const csrfProtection: RequestHandler = csrfMiddleware({ cookie: true });

export const middlewares = [cookieParser, csrfProtection];
