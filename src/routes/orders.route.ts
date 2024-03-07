import { Router } from "express";
import {
  addNewOrderHandler,
  deleteOrderHandler,
  showOrderHandler,
  updateOrderHandler,
} from "../controllers/orders.controllers";

export const router = Router();

router.get("/", showOrderHandler);
router.post("/", addNewOrderHandler)
router.patch("/:id", updateOrderHandler);
router.delete("/:id", deleteOrderHandler);
