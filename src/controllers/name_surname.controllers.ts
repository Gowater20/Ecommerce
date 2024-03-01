import { Request, Response } from "express";
import {
  addNewName,
  deleteName,
  updateName,
} from "../services/name_surname.service";

export const addNewNameHandler = async (req: Request, res: Response) => {
  const newUser = await addNewName(req.body);
  try {
    res.status(200).json({ message: "User added correctly", newUser });
  } catch (error) {
    res.status(500).json({ message: "User not found" });
  }
};

export const deleteNameHandler = async (req: Request, res: Response) => {
  const deletedUser = await deleteName(req.params.id);
  try {
    res.status(200).json({ message: "User deleted correctly", deletedUser });
  } catch (error) {
    res.status(500).json({ message: "It was not possible to delete the user" });
  }
};

export const updateNameHandler = async (req: Request, res: Response) => {
  const newUser = await updateName(req.params.id, req.body);
  try {
    res.status(200).json({ message: "User added correctly", newUser });
  } catch (error) {
    res.status(500).json({ message: "User not found" });
  }
};
