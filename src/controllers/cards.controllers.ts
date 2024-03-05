import { Request, Response } from "express";
import { User } from "../models/user.model";
import {
  // showCards,
  showCardById,
  addNewCard,
  deleteCard,
  updateCard,
} from "../services/cards.service";

/*
export const showCardsHandler = async (req: Request, res: Response) => {
  const cards = await showCards();
  try {
    res.status(200).json(cards);
  } catch (error) {
    res.status(500).json(error);
  }
};
*/

export const showCardByIdHandler = async (req: Request, res: Response) => {
  const card = await showCardById(req.params.id);
  try {
    res.status(200).json(card);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const addNewCardHandler = async (req: Request, res: Response) => {
  const newCard = await addNewCard(req.body);
  try {
    res.status(200).json({ message: "new user added", newCard });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteCardHandler = async (req: Request, res: Response) => {
  const cardToEliminate = await deleteCard(req.params.id);
  try {
    res.status(200).json(cardToEliminate);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateCardHandler = async (req: Request, res: Response) => {
  const changeCard = await updateCard(req.params.id, req.body);
  try {
    res.status(200).json(changeCard);
  } catch (error) {
    res.status(500).json(error);
  }
};
