import { Router } from "express";
import {
  deleteOrderHandler,
  showOrderHandler,
  updateOrderHandler,
} from "../controllers/orders.controllers";

export const router = Router();

router.get("/", showOrderHandler);
router.patch("/:id", updateOrderHandler);
router.delete("/:id", deleteOrderHandler);
