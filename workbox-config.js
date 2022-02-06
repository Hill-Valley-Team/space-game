module.exports = {
  globDirectory: 'dist/',
  globPatterns: [
    '**/*.{html,json,js,css,jpg, png, svg}'
  ],
  swSrc: 'src/utils/service-worker.ts',
  swDest: 'dist/service-worker.js',
};
