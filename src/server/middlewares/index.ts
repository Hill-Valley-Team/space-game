import { RequestHandler } from 'express';
import cookieParserMiddleware from 'cookie-parser';
import csrfMiddleware from 'csurf';
import logger from './logger';
import { auth } from './auth';
import hrm from './hrm';

const cookieParser: RequestHandler = cookieParserMiddleware();
const csrfProtection: RequestHandler = csrfMiddleware({ cookie: true });

export const middlewares = [logger, ...hrm, cookieParser, csrfProtection, auth];
