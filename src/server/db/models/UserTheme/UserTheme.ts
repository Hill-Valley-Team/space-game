import { AllowNull, Column, DataType, Model, Sequelize, Table } from 'sequelize-typescript';

@Table({
  tableName: 'user_theme',
  timestamps: true,
  paranoid: true,
})
export class UserTheme extends Model {
  @AllowNull(false)
  @Column(DataType.STRING)
  theme!: string;

  @Column(DataType.STRING)
  device!: string;
}
