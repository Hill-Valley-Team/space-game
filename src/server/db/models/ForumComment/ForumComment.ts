import {
  Model,
  Sequelize,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';

export class ForumComment extends Model<
  InferAttributes<ForumComment>,
  InferCreationAttributes<ForumComment>
  > {
  declare id: CreationOptional<number>;
  declare text: string;
  declare topicId: number;
  declare userId: number;
  declare parentId: number | null;
  declare level: number;
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
        field: 'topic_id',
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      userId: {
        field: 'user_id',
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      parentId: {
        field: 'parent_id',
        type: DataTypes.INTEGER,
      },
      level: {
        field: 'level',
        type: DataTypes.INTEGER,
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
