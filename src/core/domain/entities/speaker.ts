import { IActivity } from "./activity";
import { IUser } from "./user";

export interface ISpeaker {
  createdAt: Date;
  updatedAt: Date;
  activity?: IActivity;
  user?: IUser;
}
