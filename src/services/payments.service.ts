import { IPayment } from "../types/paymnet.type";
import { Payment } from "../models/payment.model";
import { ICard } from "../types/cards.type";

export const addPayment = async (card: ICard): Promise<IPayment> => {
  return await Payment.create(card);
};

export const updatePayment = async (
  id: string,
  card: Partial<ICard>
): Promise<IPayment | null> => {
  return await Payment.findByIdAndUpdate(id, card);
};

export const deletePayment = async (id: string): Promise<IPayment | null> => {
  return await Payment.findByIdAndDelete(id);
};

export const showAllPayments = async (): Promise<IPayment[]> => {
  return await Payment.find();
};

export const showPaymentById = async (id: string): Promise<IPayment | null> => {
  return await Payment.findById(id);
};
