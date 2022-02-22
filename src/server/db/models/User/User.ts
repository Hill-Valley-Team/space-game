import { Column, DataType, HasOne, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { UserTheme } from '../UserTheme';

@Table({
  tableName: 'users',
  timestamps: true,
  paranoid: true,
  underscored: true,
})
export class User extends Model {
  @PrimaryKey
  @Column(DataType.INTEGER.UNSIGNED)
  id!: number;

  @Column(DataType.STRING)
  firstName!: string;

  @Column(DataType.STRING)
  lastName!: number;
}
