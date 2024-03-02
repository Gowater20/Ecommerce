import mongoose from "mongoose";
import { ILineKart } from "../types/line_kart.type";
import { Product } from "./product.model";

const lineKartSchema = new mongoose.Schema<ILineKart>(
  {
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: Product,
      required: true,
    },

    quantity: {
      type: Number,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    discount: {
      type: Number,
      required: false,
    },
  },
  { timestamps: true }
);

export const LineKart = mongoose.model("LineKart", lineKartSchema);
