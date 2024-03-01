import { Schema } from "mongoose";

export interface IPayment {
  id: string;
  card: Schema.Types.ObjectId;
}
