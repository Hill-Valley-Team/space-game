import { Sequelize } from 'sequelize-typescript';
import { sequelizeOptions } from './config';
// import { userModel } from './models/user';

export const sequelize = new Sequelize(sequelizeOptions);

// export async function dbConnect() {
//   try {
//     await sequelize.authenticate(); // Проверка аутентификации в БД
//     await sequelize.sync(); // Синхронизация базы данных
//     console.log('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }
// }
