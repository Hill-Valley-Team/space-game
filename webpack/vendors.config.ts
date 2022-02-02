import { join } from 'path';
import { Configuration, DllPlugin } from 'webpack';
import { DIST_DIR } from './env';

const config: Configuration = {
  target: 'web',
  devtool: 'source-map',
  entry: {
    vendors: ['react', 'react-dom', 'react-helmet'],
  },
  output: {
    library: '[name]_[hash]',
    filename: '[name]_[hash].js',
    path: join(DIST_DIR, 'client', '_'),
  },
  plugins: [
    new DllPlugin({
      name: '[name]_[hash]',
      path: join(DIST_DIR, 'webpack', 'vendors-manifest.json'),
    }),
  ],
};

export default config;
