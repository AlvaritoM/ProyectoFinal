import { IActivity } from "./activity";
import { IInscription } from "./inscription";

export interface IAttendance {
  date: Date;
  createdAt: Date;
  updatedAt: Date;
  activity?: IActivity;
  inscription?: IInscription;
}
