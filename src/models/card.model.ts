import mongoose from "mongoose";
import { ICard } from "../types/card.type";

const cardSchema = new mongoose.Schema<ICard>(
  {
    name: {
      type: String,
      require: true,
    },

    surname: {
      type: String,
      require: true,
    },

    pan: {
      type: Number,
      require: true,
    },

    cvc: {
      type: Number,
      require: true,
    },

    expire: {
      type: Date,
      require: true,
    },
  },

  { timestamps: true }
);

export const Card = mongoose.model("Card", cardSchema);
