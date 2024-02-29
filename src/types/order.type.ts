import { ICart } from "./cart.type";
import { ICard } from "./card.type";
import { IUser } from "./user.type";

export interface IOrder {
  id: string;
  user: IUser;
  cart: ICart;
  card: ICard;
  coupon: number;
  expeditionCost: boolean;
}
