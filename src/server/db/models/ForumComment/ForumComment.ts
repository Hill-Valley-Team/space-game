import { AllowNull, Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({
  tableName: 'forum_comment',
  timestamps: true,
  paranoid: true,
  underscored: true,
})
export class ForumComment extends Model {
  @AllowNull(false)
  @Column(DataType.STRING)
  text!: string;

  @AllowNull(false)
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    field: 'topic_id',
  })
  topicId!: string;

  @AllowNull(false)
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    field: 'user_id',
  })
  userId!: number;

@AllowNull(false)
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    field: 'comment_id',
  })
  comment_id!: number;

  @AllowNull(true)
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    field: 'parent_id',
  })
  parent_id?: number;
}
