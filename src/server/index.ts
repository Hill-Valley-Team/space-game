import path from 'path';
import express from 'express';
import render from './middlewares/render';
import { middlewares } from './middlewares';
import { sequelize } from './db/sequelize';
import { initUser } from './db/models/User';
import { initUserTheme, UserTheme } from './db/models/UserTheme';
import { initSiteTheme } from './db/models/SiteTheme';

initUserTheme(sequelize);
// initSiteTheme(sequelize);
// initUser(sequelize);

sequelize.sync().then(() => {
  console.log('db');
});

const app = express();

app.use(express.static(path.resolve(__dirname, '../dist')));

app.get('/*', [...middlewares], render);

export { app };
