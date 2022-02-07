import { join } from 'path';

import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';
import CompressionPlugin from 'compression-webpack-plugin';
import ImageMinimizerPlugin from 'image-minimizer-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { Configuration, DllReferencePlugin, Entry, HotModuleReplacementPlugin } from 'webpack';
import { IS_DEV, DIST_DIR, SRC_DIR } from './env';
import fileLoader from './loaders/file';
import imageLoader from './loaders/image';
import cssLoader from './loaders/css';
import tsLoader from './loaders/ts';
// import { config } from 'dotenv';

// config();

export const clientConfig: Configuration = {
  entry: [
    IS_DEV && 'react-hot-loader/patch',
    IS_DEV && 'webpack-hot-middleware/client',
    IS_DEV && 'css-hot-loader/hotModuleReplacement',
    join(SRC_DIR, 'index.tsx'),
  ].filter(Boolean) as Entry,
  // entry: join(SRC_DIR, 'index.tsx'),
  module: {
    rules: [fileLoader.client, cssLoader.client, tsLoader.client, imageLoader.client],
  },
  output: {
    path: DIST_DIR,
    publicPath: '/',
    filename: '[name].bundle.js',
    assetModuleFilename: 'assets/images/[hash][ext][query]',
    library: {
      type: 'umd',
      name: 'GameLibrary',
    },
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.json', '.ts', '.tsx'],
    plugins: [new TsconfigPathsPlugin()],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: './src/assets/images/', to: './assets/images/' },
        { from: './src/game/assets/images/', to: './assets/images/' },
      ],
    }),
    new DllReferencePlugin({
      manifest: join(DIST_DIR, 'vendors', 'vendors-manifest.json'),
    }),
    new MiniCssExtractPlugin({ filename: '[name].css' }),
    new ImageMinimizerPlugin({
      minimizerOptions: {
        plugins: [
          ['gifsicle', { interlaced: true }],
          ['jpegtran', { progressive: true }],
          ['optipng', { optimizationLevel: 5 }],
          [
            'svgo',
            {
              plugins: [
                {
                  name: 'removeViewBox',
                  active: false,
                },
              ],
            },
          ],
        ],
      },
    }),
    new HotModuleReplacementPlugin(),
    !IS_DEV && new CompressionPlugin(),
  ].filter(Boolean) as [],

  devtool: 'source-map',

  performance: {
    hints: IS_DEV ? false : 'warning',
  },
};
