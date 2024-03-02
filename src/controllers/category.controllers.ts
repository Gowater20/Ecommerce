import { Request, Response } from "express";
import { showCategories, showCategoryById, addNewCategory, deleteCategory, updateCategory } from "../services/category.service";

export const showCategoryHandler = async (req: Request, res: Response) => {
    const users = await showCategories();
    try {
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json(error)
    }
}

export const showCategoryByIdHandler = async (req: Request, res: Response) => {
    const user = await showCategoryById(req.params.id);
    try {
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json(error)
    }
}

export const addNewCategoryHandler = async (req: Request, res: Response) => {
    const newUser = await addNewCategory(req.body);
    try {
        res.status(200).json({message: "new user added", newUser})
    } catch (error) {
        res.status(500).json(error)
    }
}

export const deleteCategoryHandler = async (req: Request, res: Response) => {
    const userToKill = await deleteCategory(req.params.id);
    try {
        res.status(200).json(userToKill)
    } catch (error) {
        res.status(500).json(error)
    }
}

export const updateCategoryHandler = async (req: Request, res: Response) => {
    const upgradeUser = await updateCategory(req.params.id, req.body);
    try {
        res.status(200).json(upgradeUser)
    } catch (error) {
        res.status(500).json(error)
    }
}

