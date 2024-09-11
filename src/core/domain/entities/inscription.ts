import { IActivity } from "./activity";
import { IUser } from "./user";
import { IPayment } from "./payment";

export interface IInscription {
  id: number;
  isApproved: boolean;
  createdAt: Date;
  updatedAt: Date;
  activity?: IActivity;
  user?: IUser;
  payment?: IPayment;
}
