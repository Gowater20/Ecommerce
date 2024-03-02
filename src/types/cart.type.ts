import { Schema } from "mongoose";

export interface ICart {
  id: string;
  line_kart: Schema.Types.ObjectId;
}
