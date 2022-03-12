import { RequestHandler } from 'express';
import webpack from 'webpack';
import devMiddleware from 'webpack-dev-middleware';
import hotMiddleware from 'webpack-hot-middleware';
import { clientConfig } from '../../../webpack/client.config';

const hrm = (): RequestHandler[] => {
  const compiler = webpack({ ...clientConfig, mode: 'development' });

  return [
    devMiddleware(compiler, {
      publicPath: clientConfig.output!.publicPath!,
    }),
    hotMiddleware(compiler, { path: `/__webpack_hmr` }),
  ];
};

export default hrm();
