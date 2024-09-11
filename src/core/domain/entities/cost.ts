import { IUser } from "./user";
import { IActivity } from "./activity";

export interface ICost {
  price: number;
  user?: IUser;
  activity?: IActivity;
}
