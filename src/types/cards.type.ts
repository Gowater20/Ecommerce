// import { IUser } from "./user.type";
import Schema from "mongoose";

export interface ICard {
  id: string;
  name: Schema.Types.ObjectId;
  surname: Schema.Types.ObjectId;
  pan: number;
  cvc: number;
  expire: Date;
}
