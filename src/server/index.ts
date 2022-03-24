import path from 'path';
import express from 'express';
import render from './middlewares/render';
import { middlewares } from './middlewares';
import { dbConnect, sequelize } from './db/sequelize';
import helmet from 'helmet';
import router from './router';
import logger from './middlewares/logger';
import { auth } from './middlewares/auth';
import { initSiteThemeModel, SiteTheme } from './db/models/SiteTheme/SiteTheme';
import { initUserThemeModel, UserTheme } from './db/models/UserTheme/UserTheme';
import { ForumTopic, initForumTopicModel } from './db/models/ForumTopic';
import { ForumComment, initForumCommentModel } from './db/models/ForumComment';

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

SiteTheme.hasMany(UserTheme, {
  onDelete: 'SET NULL',
  foreignKey: 'theme_id',
});

ForumTopic.hasMany(ForumComment, {
  onDelete: 'CASCADE',
  foreignKey: 'topic_id',
});

ForumComment.hasMany(ForumComment, {
  onDelete: 'CASCADE',
  foreignKey: 'comment_id',
});

dbConnect();

const app = express();

app
  .use(express.static(path.resolve(__dirname, '../dist')))
  .use(express.json())
  .use(logger)
  .use(auth)
  .use(helmet.xssFilter())
  .use('/api/v1', router);

app.get('/*', [...middlewares], render);

export { app };
