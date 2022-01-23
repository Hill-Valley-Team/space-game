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
    new WorkboxPlugin.GenerateSW({
      exclude: [/\.(?:png|jpg|jpeg|svg)$/],
      runtimeCaching: [{
        urlPattern: /\.(?:png|jpg|jpeg|svg)$/,
        handler: 'CacheFirst',
        options: {
          cacheName: 'images',
          expiration: {
            maxEntries: 5,
          },
        },
      }],
    }),
  ],
};
