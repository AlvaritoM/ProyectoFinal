import { IProvince } from "./province";

export interface ICity {
  id: number;
  name: string;
  postalCode: string;
  createdAt: Date;
  updatedAt: Date;
  province?: IProvince;
}


