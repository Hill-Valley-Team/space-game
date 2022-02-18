import { DataType, Model, Sequelize } from 'sequelize-typescript';
import { UserTheme } from '../UserTheme';

export class SiteTheme extends Model {
  declare theme: string;
  declare description: string;
}

export const initSiteTheme = (sequelize: Sequelize) => {
  SiteTheme.init(
    {
      theme: {
        type: DataType.STRING,
        unique: true,
        allowNull: false,
      },
      description: {
        type: DataType.STRING,
        allowNull: false,
      },
    },
    {
      tableName: 'site_theme',
      timestamps: true,
      paranoid: true,
      sequelize,
    },
  );
};

// SiteTheme.hasOne(UserTheme, {
//   onDelete: 'CASCADE',
//   foreignKey: {
//     allowNull: false,
//   },
// });
