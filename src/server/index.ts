import path from 'path';
import express from 'express';
import render from './middlewares/render';
import { middlewares } from './middlewares';
import hrm from './middlewares/hrm';
import { auth } from './middlewares/auth';

const app = express();

app.use(express.static(path.resolve(__dirname, '../dist')));

app.get('/*', [...middlewares], render);

export { app };
