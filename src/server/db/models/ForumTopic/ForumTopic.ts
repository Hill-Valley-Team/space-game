import { timeStamp } from 'console';
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
// import { AllowNull, Column, DataType, Length, Model, Table } from 'sequelize-typescript';

// @Table({
//   tableName: 'forum_topic',
//   timestamps: true,
//   paranoid: true,
//   underscored: true,
// })
// export class ForumTopic extends Model {
//   @AllowNull(false)
//   // @Length({ min: 3, max: 255 })
//   @Column(DataType.STRING)
//   title!: string;

//   @AllowNull(false)
//   @Column(DataType.STRING)
//   description!: string;

//   @AllowNull(false)
//   @Column({
//     type: DataType.INTEGER,
//     field: 'user_id',
//   })
//   userId!: number;
// }
