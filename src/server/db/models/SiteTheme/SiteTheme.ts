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
        type: DataTypes.INTEGER.UNSIGNED,
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

// import { AllowNull, Column, DataType, Length, Model, Table, Unique } from 'sequelize-typescript';

// @Table({
//   tableName: 'site_theme',
//   timestamps: true,
//   paranoid: true,
//   underscored: true,
// })
// export class SiteTheme extends Model {
//   @AllowNull(false)
//   @Unique(true)
//   @Length({ min: 3, max: 20 })
//   @Column(DataType.STRING)
//   theme!: string;

//   @AllowNull(false)
//   @Column(DataType.STRING)
//   description!: string;
// }
