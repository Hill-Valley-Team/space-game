import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({
  tableName: 'users',
  timestamps: true,
  paranoid: true,
})
export class User extends Model {
  @Column(DataType.STRING)
  firstName!: string;

  @Column(DataType.STRING)
  lastName!: number;
}
