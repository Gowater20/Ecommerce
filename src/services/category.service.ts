import mongoose from "mongoose";
import { ICategory } from "../types/category.type";
import { Category } from "../models/category.model";



export const showCategories = async (): Promise <ICategory[]> => {
    return await Category.find();
};

export const showCategoryById = async (id: string): Promise <ICategory|null> => {
    return await Category.findById(id);
}

export const addNewCategory = async (newCategory: ICategory): Promise <ICategory> => {
    return await Category.create(newCategory);
}

export const deleteCategory = async (id: string): Promise <ICategory|null> => {
    return await Category.findByIdAndDelete(id);
}

export const updateCategory = async (id: string, category: Partial <ICategory>): Promise <ICategory|null> => {
    return await Category.findByIdAndUpdate(id, category, {new: true});
}