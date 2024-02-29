import { ICategory } from "./category.type";

export interface IProduct {
  id: string;
  category: ICategory;
  name: string;
  quantity: number;
  price: number;
  brand: string;
  sale: number;
}
