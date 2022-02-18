import { DataType, Model, Sequelize } from 'sequelize-typescript';

export class UserTheme extends Model {
  declare theme: string;
  declare device: string;
}

export const initUserTheme = (sequelize: Sequelize) => {
  UserTheme.init(
    {
      theme: {
        type: DataType.STRING,
        allowNull: false,
      },
      device: {
        type: DataType.STRING,
      },
    },
    {
      tableName: 'user_theme',
      timestamps: true,
      paranoid: true,
      sequelize,
    },
  );
};
