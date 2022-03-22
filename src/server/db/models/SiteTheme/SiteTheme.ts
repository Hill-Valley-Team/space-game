import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  Sequelize,
  DataTypes,
  CreationOptional,
} from 'sequelize';

export class SiteTheme extends Model<
  InferAttributes<SiteTheme>,
  InferCreationAttributes<SiteTheme>
  > {
  declare id: CreationOptional<number>;
  declare theme: string;
  declare description: string;
}

export const initSiteThemeModel = (sequelize: Sequelize) =>
  SiteTheme.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
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
