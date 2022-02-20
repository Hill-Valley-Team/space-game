import { AllowNull, Column, DataType, Model, Table, Unique } from 'sequelize-typescript';

@Table({
  tableName: 'site_theme',
  timestamps: true,
  paranoid: true,
})
export class SiteTheme extends Model {
  @AllowNull(false)
  @Unique(true)
  @Column(DataType.STRING)
  theme!: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  description!: string;
}
