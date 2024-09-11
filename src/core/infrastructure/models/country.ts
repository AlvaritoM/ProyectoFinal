import { Table, Column, Model, DataType } from "sequelize-typescript";

@Table({
  tableName: "countries",
  timestamps: true,
})
export class Country extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;
}
