import { IProduct } from "../types/product.type";
import { Product } from "../models/product.model";

export const showAllProducts = async (): Promise<IProduct[]> => {
	return await Product.find();
};

export const showProduct = async (id: string): Promise<IProduct | null> => {
	return await Product.findById(id);
};

export const createProduct = async (product: IProduct): Promise<IProduct> => {
	return await Product.create(product);
};

export const cancelProduct = async (id: string): Promise<IProduct | null> => {
	return await Product.findByIdAndDelete(id);
};

export const upGradeProduct = async (
	id: string,
	product: Partial<IProduct>
): Promise<IProduct | null> => {
	return await Product.findByIdAndUpdate(id, product, { new: true });
};
