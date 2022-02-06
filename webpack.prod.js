const path = require('path');
const { DefinePlugin } = require('webpack');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new WorkboxPlugin.InjectManifest({
      swSrc: path.resolve(__dirname, './src/utils/service-worker.ts'),
      swDest: "./service-worker.js",
      mode: 'production'
    })
  ],
};
