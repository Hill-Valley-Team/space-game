import { AllowNull, Column, DataType, Length, Model, Table, Unique } from 'sequelize-typescript';

@Table({
  tableName: 'site_theme',
  timestamps: true,
  paranoid: true,
  underscored: true,
})
export class SiteTheme extends Model {
  @AllowNull(false)
  @Unique(true)
  @Length({ min: 3, max: 20 })
  @Column(DataType.STRING)
  theme!: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  description!: string;
}
