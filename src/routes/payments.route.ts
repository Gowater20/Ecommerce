import { Router } from "express";
import {
  addNewPaymentHandler,
  deletePaymentHandler,
  showPaymentsByIdHandler,
  showPaymentsHandler,
  updatePaymentHandler,
} from "../controllers/payments.controllers";

export const router = Router();

router.get("/:id", showPaymentsByIdHandler);
router.post("/", addNewPaymentHandler);
router.patch("/:id", updatePaymentHandler);
router.get("/", showPaymentsHandler);
router.delete("/:id", deletePaymentHandler);
