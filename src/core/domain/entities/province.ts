import { ICountry } from "./country";

export interface IProvince {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  country?: ICountry;
}
