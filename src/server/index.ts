import path from 'path';
import express from 'express';
import render from './middlewares/render';
import { middlewares } from './middlewares';
import helmet from 'helmet';
import router from './router';
import logger from './middlewares/logger';
import { auth } from './middlewares/auth';
import { initSiteThemeModel, SiteTheme } from './db/models/SiteTheme/SiteTheme';
import { initUserThemeModel, UserTheme } from './db/models/UserTheme/UserTheme';
import { ForumTopic, initForumTopicModel } from './db/models/ForumTopic';
import { ForumComment, initForumCommentModel } from './db/models/ForumComment';
import { dbConnect, sequelize } from './db/sequelize';
import {cspHeader} from "./middlewares/csp";

initUserThemeModel(sequelize);
initSiteThemeModel(sequelize);
initForumTopicModel(sequelize);
initForumCommentModel(sequelize);

SiteTheme.hasMany(UserTheme, {
  onDelete: 'SET NULL',
  foreignKey: 'themeId',
  as: 'user_theme',
});
UserTheme.belongsTo(SiteTheme);

ForumTopic.hasMany(ForumComment, {
  onDelete: 'CASCADE',
  foreignKey: 'topicId',
  as: 'forum_comment',
});
ForumComment.belongsTo(ForumTopic);

ForumComment.hasMany(ForumComment, {
  onDelete: 'CASCADE',
  foreignKey: 'commentId',
});

dbConnect();

const app = express();

app
  .use(express.static(path.resolve(__dirname, '../dist')))
  .use(express.json())
  .use(logger)
  .use(helmet.xssFilter())
  .use(auth)
  .use('/api/v1', router)
  .use(cspHeader);

app.get('/*', [...middlewares], render);

export { app };
