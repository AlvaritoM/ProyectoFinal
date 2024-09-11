import {
  Table,
  Column,
  Model,
  ForeignKey,
  BelongsTo,
  DataType,
} from "sequelize-typescript";
import { Activity } from "./activity";
import { Inscription } from "./inscription";

@Table({
  tableName: "attendance",
  timestamps: true,
})
export class Attendance extends Model {
  @ForeignKey(() => Activity)
  @Column(DataType.INTEGER)
  activityId!: number;

  @ForeignKey(() => Inscription)
  @Column(DataType.INTEGER)
  inscriptionId!: number;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  date!: Date;

  @BelongsTo(() => Activity)
  activity!: Activity;

  @BelongsTo(() => Inscription)
  inscription!: Inscription;
}
