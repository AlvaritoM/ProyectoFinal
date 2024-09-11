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
import { Payment } from "./payment";

@Table({
  tableName: "inscriptions",
  timestamps: true,
})
export class Inscription extends Model {
  @ForeignKey(() => User)
  @Column(DataType.INTEGER)
  userId!: number;

  @ForeignKey(() => Activity)
  @Column(DataType.INTEGER)
  activityId!: number;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  isApproved!: boolean;

  @ForeignKey(() => Payment)
  @Column(DataType.INTEGER)
  paymentId!: number;

  @BelongsTo(() => User)
  user!: User;

  @BelongsTo(() => Activity)
  activity!: Activity;

  @BelongsTo(() => Payment)
  payment!: Payment;
}
