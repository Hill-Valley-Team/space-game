import { Sequelize } from 'sequelize';
import { sequelizeOptions } from './config';
import { ForumAnswer } from './models/ForumAnswers';
import { ForumComment } from './models/ForumComment';
import { ForumTopic } from './models/ForumTopic';
import { initSiteThemeModel, SiteTheme } from './models/SiteTheme';
import { initUserThemeModel, UserTheme } from './models/UserTheme';

export const sequelize = new Sequelize(sequelizeOptions);

export const dbInit = () => {
  initUserThemeModel(sequelize);
  initSiteThemeModel(sequelize);
};

export async function dbConnect() {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ force: true });
    console.log('Connection has been established successfully.');
    // if (process.env.NODE_ENV === 'development') {
    //   await initThemes();
    //   await initForumTopics();
    //   await initForumComments();
    // }
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
