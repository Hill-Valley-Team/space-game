import { DataType, Model, Sequelize } from 'sequelize-typescript';
import { UserTheme } from '../UserTheme';

export class User extends Model {
  declare firstName: string;
  declare lastName: string;
}

export const initUser = (sequelize: Sequelize) => {
  User.init(
    {
      firstName: {
        type: DataType.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataType.STRING,
      },
    },
    {
      tableName: 'users',
      timestamps: true,
      paranoid: true,
      sequelize,
    },
  );
};

// User.hasOne(UserTheme, {
//   onDelete: 'CASCADE',
//   foreignKey: {
//     allowNull: false,
//   },
// });
