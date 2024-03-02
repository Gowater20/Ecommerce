import mongoose from "mongoose";
import { ICard } from "../types/cards.type";

const cardSchema = new mongoose.Schema<ICard>(
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

    pan: {
      type: Number,
      required: true,
    },

    cvc: {
      type: Number,
      required: true,
    },

    expire: {
      type: Date,
      required: true,
    },
  },

  { timestamps: true }
);

export const Card = mongoose.model("Card", cardSchema);
