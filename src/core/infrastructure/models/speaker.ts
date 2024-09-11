import {
  Table,
  Column,
  Model,
  ForeignKey,
  BelongsTo,
  DataType,
} from "sequelize-typescript";
import { Activity } from "./activity";
import { User } from "./user";

@Table({
  tableName: "speakers",
  timestamps: true,
})
export class Speaker extends Model {
  @ForeignKey(() => Activity)
  @Column(DataType.INTEGER)
  activityId!: number;

  @ForeignKey(() => User)
  @Column(DataType.INTEGER)
  userId!: number;

  @BelongsTo(() => Activity)
  activity!: Activity;

  @BelongsTo(() => User)
  user!: User;
}
