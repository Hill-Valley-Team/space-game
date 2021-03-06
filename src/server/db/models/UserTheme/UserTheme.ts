import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  Sequelize,
  DataTypes,
  CreationOptional,
} from 'sequelize';

export class UserTheme extends Model<
  InferAttributes<UserTheme>,
  InferCreationAttributes<UserTheme>
  > {
  declare id: CreationOptional<number>;
  declare userId: number;
  declare themeId: number;
}

export const initUserThemeModel = (sequelize: Sequelize) =>
  UserTheme.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'user_id',
      },
      themeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
        field: 'theme_id',
      },
    },
    {
      indexes: [
        {
          unique: true,
          fields: ['user_id'],
        },
      ],
      sequelize,
      tableName: 'user_theme',
      underscored: true,
      paranoid: true,
    },
  );
