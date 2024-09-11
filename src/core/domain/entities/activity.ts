import { IGroup } from "./group";

export interface IActivity {
  id: number;
  title: string;
  description: string;
  startActivity: Date;
  endActivity: Date;
  startRegistration: Date;
  endRegistration: Date;
  capacity: number;
  createdAt: Date;
  updatedAt: Date;
  image: string;
  organizer: string;
  group?: IGroup;
}


