import { Request, Response } from "express";
import { deleteOrder, showOrder, updateOrder } from "../services/order.service";


export const showOrderHandler = async (req: Request, res: Response) => {
    const users = await showOrder();
    try {
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json(error)
    }
}

export const updateOrderHandler = async (req: Request, res: Response) => {
    const upgradeOrder = await updateOrder(req.params.id, req.body);
    try {
        res.status(200).json(upgradeOrder)
    } catch (error) {
        res.status(500).json(error)
    }
}

export const deleteOrderHandler = async (req: Request, res: Response) => {
    const eraseOrder = await deleteOrder(req.params.id);
    try {
        res.status(200).json(eraseOrder)
    } catch (error) {
        res.status(500).json(error)
    }
}
