import path from 'path';
import express from 'express';
import render from './middlewares/render';
import hrm from './middlewares/hrm';
import logger from './middlewares/logger';
import { nonceToken } from './middlewares/nonceToken';

const app = express();

app.use(express.static(path.resolve(__dirname, '../dist')));

// app.use(logger).use(hrm).use(nonceToken);
app.use(nonceToken);
console.log(nonceToken);

// app.use(logger).use(hrm).use(expressCspHeader);

app.get('/*', [render]);

export { app };
