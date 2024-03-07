import { Schema } from "mongoose";

export interface ILineKart {
  product: Schema.Types.ObjectId;
  quantity: number;
  price: number;
  discount: number;
}
