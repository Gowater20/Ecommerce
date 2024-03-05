import { Schema } from "mongoose";

export interface ILineKart {
  id: string;
  product: Schema.Types.ObjectId;
  quantity: number;
  price: number;
  discount: number;
}
