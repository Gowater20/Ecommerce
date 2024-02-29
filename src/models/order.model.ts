import mongoose from "mongoose";
import { IOrder } from "../types/order.type";
import { Cart } from "./cart.model";
import { User } from "./user.model";

const orderSchema = new mongoose.Schema<IOrder>({
  user: {
    type: User,
    required: true,
  },

  cart: {
    type: Cart,
    required: true,
  },

  card: {
    type: Number,
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
