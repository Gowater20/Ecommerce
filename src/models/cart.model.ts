import mongoose from "mongoose";
import { ICart } from "../types/cart.type";
import { LineKart } from "./line_kart.model";

const cartSchema = new mongoose.Schema<ICart>(
  {
    line_kart: {
      type: LineKart,
      required: true,
    },
  },

  { timestamps: true }
);

export const Cart = mongoose.model("Cart", cartSchema);
