import { AllowNull, Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({
  tableName: 'forum_answer',
  timestamps: true,
  paranoid: true,
  underscored: true,
})
export class ForumAnswer extends Model {
  @AllowNull(false)
  @Column(DataType.STRING)
  text!: string;

  @AllowNull(false)
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    field: 'comment_id',
  })
  commentId!: string;

  @AllowNull(false)
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    field: 'answer_id',
  })
  answerId!: string;

  @AllowNull(false)
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    field: 'user_id',
  })
  userId!: number;
}