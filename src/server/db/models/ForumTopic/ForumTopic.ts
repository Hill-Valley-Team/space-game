import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  Sequelize,
  DataTypes,
} from 'sequelize';

export class ForumTopic extends Model<
  InferAttributes<ForumTopic>,
  InferCreationAttributes<ForumTopic>
  > {
  declare id: CreationOptional<number>;
  declare title: string;
  declare description: string;
  declare userId: number;
}

export const initForumTopicModel = (sequelize: Sequelize) =>
  ForumTopic.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'forum_topic',
      timestamps: true,
      underscored: true,
      paranoid: true,
    },
  );
