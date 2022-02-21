import {
  AllowNull,
  AutoIncrement,
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  PrimaryKey,
  Sequelize,
  Table,
} from 'sequelize-typescript';
import { User } from '../User';

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
