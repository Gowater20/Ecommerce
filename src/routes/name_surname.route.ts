import { Router } from "express";
import {
  addNewNameHandler,
  deleteNameHandler,
  updateNameHandler,
} from "../controllers/name_surname.controllers";

export const router = Router();

router.post("/", addNewNameHandler);
router.delete("/:id", deleteNameHandler);
router.patch("/:id", updateNameHandler);
