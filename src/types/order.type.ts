import { ICart } from "./cart.type";
import { ICard } from "./cards.type";
import { IUser } from "./user.type";
import { Schema } from "mongoose";

export interface IOrder {
  id: string;
  user: Schema.Types.ObjectId;
  cart: Schema.Types.ObjectId;
  card: Schema.Types.ObjectId;
  coupon: number;
  expeditionCost: boolean;
}
