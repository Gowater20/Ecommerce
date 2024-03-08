import { Schema } from "mongoose";
export interface IUser {
  id: string;
  name: String;
  surname: String;
  card?: Schema.Types.ObjectId;
  cart?: Schema.Types.ObjectId;
  address: string;
  date: string;
  email: string;
  password: string;
}
