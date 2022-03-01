import { AllowNull, Column, DataType, Length, Model, Table } from 'sequelize-typescript';

@Table({
  tableName: 'forum_topic',
  timestamps: true,
  paranoid: true,
  underscored: true,
})
export class ForumTopic extends Model {
  @AllowNull(false)
  @Length({ min: 3, max: 255 })
  @Column(DataType.STRING)
  title!: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  description!: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  userId!: number;
}
