import { AllowNull, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { SiteTheme } from '../SiteTheme';
import { User } from '../User';

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
  @Column(DataType.STRING)
  device!: string;

  @AllowNull(false)
  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    field: 'user_id',
  })
  userId!: number;

  @AllowNull(false)
  @ForeignKey(() => SiteTheme)
  @Column({
    type: DataType.INTEGER,
    field: 'theme_id',
    defaultValue: 1,
  })
  themeId!: number;
}
