import { IProduct } from "./product.type";

export interface ILineKart {
  id: string;
  product: IProduct;
  quantity: number;
  price: number;
  discount: number;
}
