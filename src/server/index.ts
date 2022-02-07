import path from 'path';
import express from 'express';
import render from './middlewares/render';
import { middlewares } from './middlewares';
import { webpack } from 'webpack';

import { clientConfig } from '../../webpack/client.config';

var compiler = webpack({ ...clientConfig, mode: 'development' });

const app = express();

app.use(express.static(path.resolve(__dirname, '../dist')));

app.use(
  require('webpack-dev-middleware')(compiler, {
    publicPath: clientConfig.output?.publicPath,
  }),
);

app.use(require('webpack-hot-middleware')(compiler));

app.get('/*', [...middlewares], render);

export { app };
