import { AllowNull, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { SiteTheme } from '../SiteTheme';

@Table({
  tableName: 'user_theme',
  timestamps: true,
  paranoid: true,
  underscored: true,
  indexes: [
    {
      unique: true,
      fields: ['user_id'],
    },
  ],
})
export class UserTheme extends Model {
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    field: 'user_id',
  })
  userId!: number;

  @AllowNull(false)
  @ForeignKey(() => SiteTheme)
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    field: 'theme_id',
    defaultValue: 1,
  })
  themeId!: number;
}
