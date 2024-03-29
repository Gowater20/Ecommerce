import { Router } from "express";
import {
	addProduct,
	deletedProduct,
	getProductById,
	getProducts,
	updateProduct,
} from "../controllers/product.controllers";

export const router = Router();

router.get("/", getProducts);
router.get("/:id", getProductById);
router.post("/", addProduct);
router.delete("/:id", deletedProduct);
router.patch("/:id", updateProduct);
