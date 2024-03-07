import { Request, Response } from "express";
import { deleteAllLineKart, deleteLineKart, showLineKarts, updateLikeKart } from "../services/cart.service";

export const showCartHandler = async (req: Request, res: Response) => {
    const productType = await showLineKarts();
    try {
        res.status(200).json(productType)
    } catch (error) {
        res.status(500).json(error)
    }
}

export const deleteLineKartHandler = async (req: Request, res: Response) => {
    const productType = await deleteLineKart(req.params.id);
    try {
        res.status(200).json(productType)
    } catch (error) {
        res.status(500).json(error)
    }
}

export const deleteAllLineKartHandler = async (req: Request, res: Response) => {
    const products = await deleteAllLineKart();
    try {
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json(error)
    }
}

export const updateLineKartHandler = async (req: Request, res: Response) => {
    const upgradeLineKart = await updateLikeKart(req.params.id, req.body);
    try {
        res.status(200).json(upgradeLineKart)
    } catch (error) {
        res.status(500).json(error)
    }
}