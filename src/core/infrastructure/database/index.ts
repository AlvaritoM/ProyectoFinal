import { Sequelize } from "sequelize-typescript";
import { User } from "../models/user";
export { User };
import { City } from "../models/city";
import { Province } from "../models/province";
import { Country } from "../models/country";
import { Activity } from "../models/activity";
import { Group } from "../models/group";
import { Speaker } from "../models/speaker";
import { Inscription } from "../models/inscription";
import { Attendance } from "../models/attendance";
import { Cost } from "../models/cost";
import { Payment } from "../models/payment";

const sequelize = new Sequelize({
  dialect: "postgres",
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  models: [
    User,
    City,
    Province,
    Country,
    Activity,
    Group,
    Speaker,
    Inscription,
    Attendance,
    Cost,
    Payment,
  ],
});
