import { ICard } from "../types/card.type";
import { Card } from "../models/card.model";

/*
export const showCards = async (): Promise<ICard[]> => {
  return await Card.find();
};*/

export const showCardById = async (id: string): Promise<ICard | null> => {
  return await Card.findById(id);
};

export const addNewCard = async (card: ICard): Promise<ICard> => {
  return await Card.create(card);
};

export const deleteCard = async (id: string): Promise<ICard | null> => {
  return await Card.findByIdAndDelete(id);
};

export const updateCard = async (
  id: string,
  newCard: Partial<ICard>
): Promise<ICard | null> => {
  return await Card.findByIdAndUpdate(id, newCard, { new: true });
};
