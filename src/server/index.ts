import path from 'path';
import express from 'express';
import render from './middlewares/render';
import { middlewares } from './middlewares';

const app = express();

app.use(express.static(path.resolve(__dirname, '../dist'))).get('/*', [...middlewares], render);

export { app };
