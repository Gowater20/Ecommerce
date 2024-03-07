import mongoose from "mongoose";
import { IOrder } from "../types/order.type";
import { Order } from "../models/order.model";

export const showOrder = async (): Promise<IOrder[]> => {
	return await Order.find();
};

export const updateOrder = async (
	id: string,
	order: Partial<IOrder>
): Promise<IOrder | null> => {
	return await Order.findByIdAndUpdate(id, order, { new: true });
};

export const deleteOrder = async (id: string): Promise<IOrder | null> => {
	return await Order.findByIdAndDelete(id);
};

export const addOrder = async (order: IOrder): Promise<IOrder> => {
	return await Order.create(order);
};

export const showOrderById = async (id: string): Promise<IOrder | null> => {
	return await Order.findById(id);
};
