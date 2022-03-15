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
