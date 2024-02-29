import mongoose from "mongoose";
import { ICategory } from "../types/category.type";

const categorySchema = new mongoose.Schema<ICategory>(
  {
    tipology: {
      type: String,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
    },

    name: {
      type: String,
      required: true,
    },
  },

  { timestamps: true }
);

export const Category = mongoose.model("Category", categorySchema);
