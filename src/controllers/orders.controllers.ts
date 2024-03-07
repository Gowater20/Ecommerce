import { Request, Response } from "express";
import {
	addOrder,
	deleteOrder,
	showOrder,
	showOrderById,
	updateOrder,
} from "../services/order.service";

export const showOrderHandler = async (req: Request, res: Response) => {
	const users = await showOrder();
	try {
		res.status(200).json(users);
	} catch (error) {
		res.status(500).json(error);
	}
};

export const updateOrderHandler = async (req: Request, res: Response) => {
	const upgradeOrder = await updateOrder(req.params.id, req.body);
	try {
		res.status(200).json(upgradeOrder);
	} catch (error) {
		res.status(500).json(error);
	}
};

export const deleteOrderHandler = async (req: Request, res: Response) => {
	const eraseOrder = await deleteOrder(req.params.id);
	try {
		res.status(200).json(eraseOrder);
	} catch (error) {
		res.status(500).json(error);
	}
};

export const addNewOrderHandler = async (req: Request, res: Response) => {
	const newOrder = await addOrder(req.body);
	try {
		res.status(200).json({ message: "new order added", newOrder });
	} catch (error) {
		res.status(500).json(error);
	}
};

export const showOrderByIdHandler = async (req: Request, res: Response) => {
	const order = await showOrderById(req.params.id);
	try {
		res.status(200).json(order);
	} catch (error) {
		res.status(500).json(error);
	}
};
