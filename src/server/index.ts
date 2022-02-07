import path from 'path';
import express from 'express';
import render from './middlewares/render';
import hrm from './middlewares/hrm';
import logger from './middlewares/logger';

const app = express();

app.use(express.static(path.resolve(__dirname, '../dist')));

app.use(logger);

app.get('/*', hrm, render);

export { app };
