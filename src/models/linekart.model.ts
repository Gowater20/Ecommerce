import mongoose from "mongoose";
import { ILineKart } from "../types/linekart.type";

const LineKartSchema = new mongoose.Schema<ILineKart>(
	{
		product: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "product",
			required: true,
		},
		quantity: {
			type: Number,
			required: true,
		},
		price: {
			type: Number,
			required: true,
		},
		disount: {
			type: Number,
			required: true,
		},
	},
	{ timestamps: true }
);

export const LineKart = mongoose.model("LineKart", LineKartSchema);
