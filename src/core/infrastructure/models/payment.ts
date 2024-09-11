import { Table, Column, Model, DataType } from "sequelize-typescript";

@Table({
  tableName: "payments",
  timestamps: true,
})
export class Payment extends Model {
  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  paymentDate!: Date;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  receipt!: string;
}
