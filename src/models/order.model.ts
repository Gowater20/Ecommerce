import mongoose, { Schema } from "mongoose";
import { IOrder } from "../types/order.type";
import { Cart } from "./cart.model";
import { User } from "./user.model";
import { Card } from "./card.model";

const orderSchema = new mongoose.Schema<IOrder>({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User,
    required: true,
  },

  cart: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Cart,
    required: true,
  },

  card: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Card,
    required: true,
  },

  coupon: {
    type: Number,
    required: true,
  },

  expeditionCost: {
    type: Boolean,
    required: true,
  },
});

export const Order = mongoose.model("Order", orderSchema);
