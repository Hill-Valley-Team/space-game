import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  Sequelize,
  DataTypes,
  NonAttribute,
} from 'sequelize';
import { SiteTheme } from '../SiteTheme';

export class UserTheme extends Model<
  InferAttributes<UserTheme>,
  InferCreationAttributes<UserTheme>
> {
  declare userId: number;
  declare themeId: number;
}

export const initUserThemeModel = (sequelize: Sequelize) => {
  UserTheme.init(
    {
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
};
// import { AllowNull, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
// import { SiteTheme } from '../SiteTheme';

// @Table({
//   tableName: 'user_theme',
//   timestamps: true,
//   paranoid: true,
//   underscored: true,
//   indexes: [
//     {
//       unique: true,
//       fields: ['user_id'],
//     },
//   ],
// })
// export class UserTheme extends Model {
//   @Column({
//     type: DataType.INTEGER,
//     field: 'user_id',
//   })
//   userId!: number;

//   @AllowNull(false)
//   @ForeignKey(() => SiteTheme)
//   @Column({
//     type: DataType.INTEGER,
//     field: 'theme_id',
//     defaultValue: 1,
//   })
//   themeId!: number;
// }
