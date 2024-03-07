import { Schema } from "mongoose";
export interface IProduct {
	category: Schema.Types.ObjectId;
	name: String;
	brand: String;
	quantity: number;
	price: number;
	sale: number;
}
