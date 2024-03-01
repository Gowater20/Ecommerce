import mongoose from "mongoose";
import { INameSurname } from "../types/name_surname.type";

const namesSchema = new mongoose.Schema<INameSurname>(
  {
    name: {
      type: String,
      required: false,
    },
    surname: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

export const Names = mongoose.model("Names", namesSchema);
