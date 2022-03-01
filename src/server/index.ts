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

sequelize.addModels([SiteTheme, UserTheme, ForumTopic]);

SiteTheme.hasMany(UserTheme, {
  onDelete: 'SET NULL',
  foreignKey: 'theme_id',
});

dbConnect();

const app = express();

app.use(express.static(path.resolve(__dirname, '../dist')));
app.use('/api/v1', router);

app.get('/*', [...middlewares], render);

export { app };
