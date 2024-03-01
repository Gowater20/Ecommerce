import { ICart } from "../types/cart.type";
import { Cart } from "../models/cart.model";
import { LineKart } from "../models/line_kart.model";

export const showLineKarts = async (): Promise <ICart[] | null> => {
    return await Cart.find();
};

export const deleteLineKart = async (id: string): Promise <ICart|null> => {
    return await Cart.findByIdAndDelete(id);
}

export const deleteAllLineKart = async (): Promise<void> => {
    await LineKart.deleteMany();
}

export const updateLikeKart = async (id: string, product: Partial <ICart>): Promise <ICart|null> => {
    return await Cart.findByIdAndUpdate(id, product, {new: true});
}