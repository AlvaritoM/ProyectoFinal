import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import { Country } from "./country";

@Table({
  tableName: "provinces",
  timestamps: true,
})
export class Province extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;

  @ForeignKey(() => Country)
  @Column(DataType.INTEGER)
  countryId!: number;

  @BelongsTo(() => Country)
  country!: Country;
}
