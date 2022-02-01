// import path from 'path';
import express from 'express';
// import compression from 'compression';
// import 'babel-polyfill';
import serverRenderMiddleware from './server/serverRenderMiddleware';

const app = express();

app.get('/*', serverRenderMiddleware);

export { app };
