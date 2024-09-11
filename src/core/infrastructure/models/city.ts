import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import { Province } from "./province";

@Table({
  tableName: "cities",
  timestamps: true,
})
export class City extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  postalCode!: string;

  @ForeignKey(() => Province)
  @Column(DataType.INTEGER)
  provinceId!: number;

  @BelongsTo(() => Province)
  province!: Province;
}
