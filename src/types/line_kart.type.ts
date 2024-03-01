import { Schema } from "mongoose";
import { IProduct } from "./product.type";

export interface ILineKart {
  id: string;
  product: Schema.Types.ObjectId;
  quantity: number;
  price: number;
  discount: number;
}
