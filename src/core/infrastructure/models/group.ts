import { Table, Column, Model, DataType, HasMany } from "sequelize-typescript";
import { Activity } from "./activity";

@Table({
  tableName: "groups",
  timestamps: true,
})
export class Group extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  title!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  description!: string;

  @HasMany(() => Activity)
  activities!: Activity[];
}
