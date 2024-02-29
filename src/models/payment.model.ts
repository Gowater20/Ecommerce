import mongoose from "mongoose";
import { Card } from "./card.model";
import { IPayment } from "../types/paymnet.type";

const paymentSchema = new mongoose.Schema<IPayment>(
  {
    card: {
      type: Card,
      required: true,
    },
  },

  { timestamps: true }
);

export const Payment = mongoose.model("Payment", paymentSchema);
