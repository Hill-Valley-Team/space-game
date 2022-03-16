import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  Sequelize,
  DataTypes,
} from 'sequelize';

export class ForumComment extends Model<
  InferAttributes<ForumComment>,
  InferCreationAttributes<ForumComment>
> {
  declare id: CreationOptional<number>;
  declare text: string;
  declare topicId: number;
  declare userId: number;
}

export const initForumCommentModel = (sequelize: Sequelize) =>
  ForumComment.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      text: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      topicId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'forum_comment',
      timestamps: true,
      underscored: true,
      paranoid: true,
    },
  );

// import { AllowNull, Column, DataType, Model, Table } from 'sequelize-typescript';

// @Table({
//   tableName: 'forum_comment',
//   timestamps: true,
//   paranoid: true,
//   underscored: true,
// })
// export class ForumComment extends Model {
//   @AllowNull(false)
//   @Column(DataType.STRING)
//   text!: string;

//   @AllowNull(false)
//   @Column({
//     type: DataType.INTEGER,
//     field: 'topic_id',
//   })
//   topicId!: string;

//   @AllowNull(false)
//   @Column({
//     type: DataType.INTEGER,
//     field: 'user_id',
//   })
//   userId!: number;
// }
