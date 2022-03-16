import { Sequelize } from 'sequelize';
import { sequelizeOptions } from './config';
import { initForumComments, initForumTopics, initThemes } from './init';

export const sequelize = new Sequelize(sequelizeOptions);

export async function dbConnect() {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ force: true });
    console.log('Connection has been established successfully.');
    await initThemes();
    if (process.env.NODE_ENV === 'development') {
      await initForumTopics();
      await initForumComments();
    }
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
