import { Request, Response } from "express";
import {
  addPayment,
  deletePayment,
  showAllPayments,
  showPaymentById,
  updatePayment,
} from "../services/payments.service";

export const addNewPaymentHandler = async (req: Request, res: Response) => {
  const newPayment = addPayment(req.body);
  try {
    res.status(200).json({ message: "You can do another payment", newPayment });
  } catch (error) {
    res.status(500).json({ message: "error" });
  }
};

export const deletePaymentHandler = async (req: Request, res: Response) => {
  const idPayment = deletePayment(req.params.id);
  try {
    res
      .status(200)
      .json({ message: "This payment has been deleted", idPayment });
  } catch (error) {
    res.status(500).json({ message: "error" });
  }
};

export const showPaymentsHandler = async (req: Request, res: Response) => {
  const payments = showAllPayments();
  try {
    res.status(200).json({ message: "Here you have your payments", payments });
  } catch (error) {
    res.status(500).json({ message: "error" });
  }
};

export const showPaymentsByIdHandler = async (req: Request, res: Response) => {
  const payment = showPaymentById(req.params.id);
  try {
    res.status(200).json({ message: "Here you have your payment", payment });
  } catch (error) {
    res.status(500).json({ message: "error" });
  }
};

export const updatePaymentHandler = async (req: Request, res: Response) => {
  const updatedPayment = updatePayment(req.params.id, req.body);
  try {
    res
      .status(200)
      .json({ message: "Payment modified correctly", updatePayment });
  } catch (error) {
    res.status(500).json({ message: "error" });
  }
};
