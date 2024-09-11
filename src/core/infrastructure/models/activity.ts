import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import { Group } from "./group";

@Table({
  tableName: "activities",
  timestamps: true,
})
export class Activity extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  title!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  description!: string;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  startActivity!: Date;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  endActivity!: Date;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  capacity!: number;

  @ForeignKey(() => Group)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  groupId!: number;

  @BelongsTo(() => Group)
  group!: Group;
}
