import path from 'path';
import express, { RequestHandler } from 'express';
import render from './middlewares/render';
import { middlewares } from './middlewares';
import hrm from './middlewares/hrm';

const app = express();

app.use(express.static(path.resolve(__dirname, '../dist')));

app.get('/*', [...middlewares], hrm, render);

export { app };
