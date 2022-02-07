import { RequestHandler } from 'express';
import cookieParserMiddleware from 'cookie-parser';
import csrfMiddleware from 'csurf';
import logger from './logger';

const cookieParser: RequestHandler = cookieParserMiddleware();
const csrfProtection: RequestHandler = csrfMiddleware({ cookie: true });

export const middlewares = [logger, cookieParser, csrfProtection];
