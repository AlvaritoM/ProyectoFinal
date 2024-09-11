import { ICity } from "./city";
import { EUserType } from "./usertype";

export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  password: string;
  avatar: string;
  createdAt: Date;
  updatedAt: Date;
  type: EUserType;
  email: string;
  role: string;
  isPending: boolean;
  city?: ICity;
}
