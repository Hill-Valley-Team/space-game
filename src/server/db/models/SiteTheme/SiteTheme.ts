import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  Sequelize,
  DataTypes,
  Association,
} from 'sequelize';
import { UserTheme } from '../UserTheme';

class SiteTheme extends Model<InferAttributes<SiteTheme>, InferCreationAttributes<SiteTheme>> {
  declare theme: string;
  declare description: string;
  declare static associations: {
    projects: Association<SiteTheme, UserTheme>;
  };
}

export const initSiteThemeModel = (sequelize: Sequelize) => {
  SiteTheme.init(
    {
      theme: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'site_theme',
      underscored: true,
      paranoid: true,
    },
  );
};
