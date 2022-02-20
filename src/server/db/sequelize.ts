import { Sequelize } from 'sequelize-typescript';
import { sequelizeOptions } from './config';

export const sequelize = new Sequelize({
  host: 'localhost',
  port: 5432,
  username: 'pgadmin',
  password: 'Ghbdtn43#',
  database: 'space-game-db',
  dialect: 'postgres',
});

export async function dbConnect() {
  try {
    await sequelize.authenticate(); // Проверка аутентификации в БД
    await sequelize.sync({ force: true }); // Синхронизация базы данных
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
