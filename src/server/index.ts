import path from 'path';
import express from 'express';
import render from './middlewares/render';
import { middlewares } from './middlewares';
import { dbConnect, sequelize } from './db/sequelize';
import router from './router';
import logger from './middlewares/logger';
import { auth } from './middlewares/auth';
import { initSiteThemeModel, SiteTheme } from './db/models/SiteTheme/SiteTheme';
import { initUserThemeModel, UserTheme } from './db/models/UserTheme/UserTheme';
// import { SiteTheme } from './db/models/SiteTheme';

// sequelize.addModels([SiteTheme, UserTheme, ForumTopic, ForumComment, ForumAnswer]);

initUserThemeModel(sequelize);
initSiteThemeModel(sequelize);

SiteTheme.hasMany(UserTheme, {
  onDelete: 'SET NULL',
  foreignKey: 'themeId',
  as: 'user_theme',
});

// ForumTopic.hasMany(ForumComment, {
//   onDelete: 'CASCADE',
//   foreignKey: 'topic_id',
// });
dbConnect();

const app = express();

app
  .use(express.static(path.resolve(__dirname, '../dist')))
  .use(express.json())
  .use(logger)
  .use(auth)
  .use('/api/v1', router);

app.get('/*', [...middlewares], render);

export { app };
