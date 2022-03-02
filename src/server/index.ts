import path from 'path';
import express from 'express';
import render from './middlewares/render';
import { middlewares } from './middlewares';
import { sequelize, dbConnect } from './db/sequelize';
import { User } from './db/models/User';
import { UserTheme } from './db/models/UserTheme';
import { SiteTheme } from './db/models/SiteTheme';
import router from './router';
import { ForumTopic } from './db/models/ForumTopic';
import { ForumComment } from './db/models/ForumComment';
import { ForumAnswer } from './db/models/ForumAnswers';

sequelize.addModels([SiteTheme, UserTheme, ForumTopic, ForumComment, ForumAnswer]);

SiteTheme.hasMany(UserTheme, {
  onDelete: 'SET NULL',
  foreignKey: 'theme_id',
});

ForumTopic.hasMany(ForumComment, {
  onDelete: 'CASCADE',
  foreignKey: 'topic_id',
});

ForumComment.hasMany(ForumAnswer, {
  onDelete: 'CASCADE',
  foreignKey: 'comment_id',
});

dbConnect();

const app = express();

app.use(express.static(path.resolve(__dirname, '../dist')));
app.use(express.json());
app.use('/api/v1', router);

app.get('/*', [...middlewares], render);

export { app };
