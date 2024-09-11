import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import { City } from "./city";

// Definimos el Enum de Type en TypeScript para asegurarnos de que esté tipado en el código
export enum UserType {
  Externo = "Externo",
  Docente = "Docente",
  Alumno = "Alumno",
}

@Table({
  tableName: "users",
  timestamps: true,
})
export class User extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  firstName!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  lastName!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  email!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  avatar!: string;

  // Aquí es donde modelamos el enum usando DataType.ENUM en Sequelize
  @Column({
    type: DataType.ENUM("Externo", "Docente", "Alumno"), // Los valores del enum
    allowNull: false,
  })
  type!: UserType;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  role!: string;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  isPending!: boolean;

  @ForeignKey(() => City)
  @Column({
    type: DataType.INTEGER,
  })
  cityId!: number;

  @BelongsTo(() => City)
  city!: City;
}
