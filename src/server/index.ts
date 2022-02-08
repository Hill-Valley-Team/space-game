import path from 'path';
import express from 'express';
import render from './middlewares/render';
import { middlewares } from './middlewares';
import { webpack } from 'webpack';
import devMiddleware from 'webpack-dev-middleware';
import hotMiddleware from 'webpack-hot-middleware';
import { clientConfig } from '../../webpack/client.config';

var compiler = webpack({ ...clientConfig, mode: 'development' });

const app = express();

app.use(express.static(path.resolve(__dirname, '../dist')));

app.use(
  devMiddleware(compiler, {
    publicPath: clientConfig.output?.publicPath,
    serverSideRender: true,
  }),
);

app.use(hotMiddleware(compiler, { path: `/__webpack_hmr` }));

app.get('/*', [...middlewares], render);

export { app };
