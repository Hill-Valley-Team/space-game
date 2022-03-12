import { join } from 'path';
import { Configuration, DllPlugin } from 'webpack';
import { DIST_DIR } from './env';

const config: Configuration = {
  target: 'web',
  devtool: 'source-map',
  entry: {
    vendors: ['react', 'react-dom', 'react-helmet', 'redux', 'react-redux'],
  },
  output: {
    library: '[name]',
    filename: '[name].js',
    path: join(DIST_DIR, 'vendors'),
  },
  plugins: [
    new DllPlugin({
      name: '[name]',
      path: join(DIST_DIR, 'vendors', 'vendors-manifest.json'),
    }),
  ],
};

export default config;
