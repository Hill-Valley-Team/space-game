import { join } from 'path';
import nodeExternals from 'webpack-node-externals';
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';
import { Configuration, ProvidePlugin } from 'webpack';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import { IS_DEV, DIST_DIR, SRC_DIR } from './env';
import fileLoader from './loaders/file';
import cssLoader from './loaders/css';
import tsLoader from './loaders/ts';
import imageLoader from './loaders/image';

export const serverConfig: Configuration = {
  name: 'server',
  target: 'node',
  node: { __dirname: false },
  entry: join(SRC_DIR, 'server/index.ts'),
  module: {
    rules: [fileLoader.ssr, cssLoader.ssr, tsLoader.ssr, imageLoader.ssr],
  },
  output: {
    filename: 'server.js',
    libraryTarget: 'commonjs2',
    path: DIST_DIR,
    assetModuleFilename: 'assets/images/[hash][ext][query]',
    publicPath: '/',
  },
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['*', '.js', '.jsx', '.json', '.ts', '.tsx'],
    plugins: [new TsconfigPathsPlugin({ configFile: './tsconfig.json' })],
  },

  devtool: 'source-map',

  performance: {
    hints: IS_DEV ? false : 'warning',
  },

  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['main*', '!vendors/**'],
    }),
    new ProvidePlugin({
      window: join(__dirname, './mock/window.mock'),
      localStorage: join(__dirname, './mock/localStorage.mock'),
      document: 'global/document',
    }),
  ].filter(Boolean) as [],

  externals: [nodeExternals({ allowlist: [/\.(?!(?:tsx?|json)$).{1,5}$/i] })],

  optimization: { nodeEnv: false },
};
