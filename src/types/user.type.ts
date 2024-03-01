import { Schema } from "mongoose";
// import { INameSurname } from "./name_surname.type"; ??
export interface IUser {
  id: string;
  name: Schema.Types.ObjectId;
  surname: Schema.Types.ObjectId;
  card: Schema.Types.ObjectId;
  cart: Schema.Types.ObjectId;
  address: string;
  date: string;
  email: string;
  password: string;
}
