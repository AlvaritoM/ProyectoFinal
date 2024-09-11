import {
  Table,
  Column,
  Model,
  ForeignKey,
  BelongsTo,
  DataType,
} from "sequelize-typescript";
import { User } from "./user";
import { Activity } from "./activity";

@Table({
  tableName: "costs",
  timestamps: true,
})
export class Cost extends Model {
  @ForeignKey(() => User)
  @Column(DataType.INTEGER)
  userId!: number;

  @ForeignKey(() => Activity)
  @Column(DataType.INTEGER)
  activityId!: number;

  @Column({
    type: DataType.DECIMAL(10, 2),
    allowNull: false,
  })
  price!: number;

  @BelongsTo(() => User)
  user!: User;

  @BelongsTo(() => Activity)
  activity!: Activity;
}
