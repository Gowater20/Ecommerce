import mongoose from "mongoose";
import { IUser } from "../types/user.type";

const userSchema = new mongoose.Schema<IUser>(
  {
    name: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Names",
      required: true,
    },
    surname: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Names",
      required: true,
    },
    card: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Card",
      required: false,
    },
    cart: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Cart",
      required: true,
    },
    address: {
      type: String,
      required: false,
    },
    date: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },

  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
