const { join } = require('path');
const https = require('https');
const Loadable = require('react-loadable');
const { app } = require('./dist/server.js');
const { readFileSync } = require('fs');

const port = process.env.PORT || 443;

Loadable.preloadAll().then(() => {
  if (process.env.NODE_ENV === 'development') {
    const options = {
      key: readFileSync(join(__dirname, '/src/server/certs', 'cert.key'), 'utf8'),
      cert: readFileSync(join(__dirname, 'src/server/certs', 'cert.pem'), 'utf8'),
    };

    https.createServer(options, app).listen(port, () => {
      console.log('Application is started on', `https://local.ya-praktikum.tech:${port}/`);
    });
    return;
  }

  app.listen(port, () => {
    console.log('Application is started on', `http://local.ya-praktikum.tech:${port}/`);
  });
});
