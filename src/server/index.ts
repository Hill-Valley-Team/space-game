import path from 'path';
import express from 'express';
import render from './middlewares/render';
import { middlewares } from './middlewares';
import { sequelize, dbConnect } from './db/sequelize';
import { User } from './db/models/User';
import { UserTheme } from './db/models/UserTheme';
import { SiteTheme } from './db/models/SiteTheme';

sequelize.addModels([User, SiteTheme, UserTheme]);

SiteTheme.hasMany(UserTheme, {
  onDelete: 'SET NULL',
  foreignKey: {
    allowNull: true,
  },
});

User.hasOne(UserTheme, {
  onDelete: 'CASCADE',
  foreignKey: {
    allowNull: false,
  },
});

dbConnect();

const app = express();

app.use(express.static(path.resolve(__dirname, '../dist')));

app.get('/*', [...middlewares], render);

export { app };
