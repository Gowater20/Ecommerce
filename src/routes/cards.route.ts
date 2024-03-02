import { Router } from "express";
import {
  addNewCardHandler,
  deleteCardHandler,
  showCardByIdHandler,
  // showCardsHandler,
  updateCardHandler,
} from "../controllers/cards.controllers";

export const router = Router();

// router.get("/", showCardsHandler);
router.get("/:id", showCardByIdHandler);
router.post("/", addNewCardHandler);
router.delete("/:id", deleteCardHandler);
router.patch("/:id", updateCardHandler);
