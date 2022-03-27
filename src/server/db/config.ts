import { config } from 'dotenv';
import { Options } from 'sequelize';

// config({ path: process.env.NODE_ENV === 'development' ? '.dev.env' : '.prod.env' }); // TODO

if (process.env.NODE_ENV === 'development') {
  config({ path: '.dev.env' });
}

const { POSTGRES_HOST, POSTGRES_PORT, POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DB } = process.env;

export const sequelizeOptions: Options = {
  host: POSTGRES_HOST,
  port: Number(POSTGRES_PORT),
  username: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  database: POSTGRES_DB,
  dialect: 'postgres',
};
