import { Router } from "express";
import {
  addProduct,
  deletedProduct,
  getProductById,
  getProducts,
  updateProduct,
} from "../controllers/products.controllers";

export const router = Router();

router.get("/", getProducts);
router.get("/:id", getProductById);
router.post("/", addProduct);
router.delete("/:id", deletedProduct);
router.patch("/:id", updateProduct);
