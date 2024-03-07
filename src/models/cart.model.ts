import mongoose from "mongoose";
import { ICart } from "../types/cart.type";
import { LineKart } from "./linekart.model";

const cartSchema = new mongoose.Schema<ICart>(
  {
    line_kart: {
      type: mongoose.Schema.Types.ObjectId,
      ref: LineKart,
      required: true,
    },
  },

	{ timestamps: true }
);

export const Cart = mongoose.model("Cart", cartSchema);
