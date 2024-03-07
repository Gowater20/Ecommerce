import { Router } from "express";
import { 
    addNewCategoryHandler, 
    deleteCategoryHandler, 
    showCategoryByIdHandler, 
    showCategoryHandler, 
    updateCategoryHandler 
} from "../controllers/category.controllers";

export const router = Router();

router.get("/", showCategoryHandler);
router.get("/:id", showCategoryByIdHandler);
router.post("/", addNewCategoryHandler);
router.delete("/:id", deleteCategoryHandler);
router.patch("/:id", updateCategoryHandler);