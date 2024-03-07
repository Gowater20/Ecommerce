import { Request, Response } from "express";
import {
  createNewUser,
  deleteUser,
  showUserById,
  showUsers,
  updateUser,
} from "../services/users.service";
import { User } from "../models/user.model";

// mostra utenti
export const showUsersHandler = async (req: Request, res: Response) => {
  const users = await showUsers();
  try {
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
};

//mostra utente dall'id
export const showUserByIdHandler = async (req: Request, res: Response) => {
  const user = await showUserById(req.params.id);
  try {
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const addNewUserHandler = async (req: Request, res: Response) => {
  const newUser = await createNewUser(req.body);
  try {
    res.status(200).json({ message: "new user added", newUser });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteUserHandler = async (req: Request, res: Response) => {
  const userToKill = await deleteUser(req.params.id);
  try {
    res.status(200).json(userToKill);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateUserHandler = async (req: Request, res: Response) => {
  const upgradeUser = await updateUser(req.params.id, req.body);
  try {
    res.status(200).json(upgradeUser);
  } catch (error) {
    res.status(500).json(error);
  }
};


