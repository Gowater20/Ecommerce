import { deleteAllLineKartHandler, 
        deleteLineKartHandler, 
        showCartHandler, 
        updateLineKartHandler 
        } from "../controllers/cart.controllers";
        
import { Router } from "express";

export const router = Router();

router.get("/", showCartHandler)
router.delete("/:id", deleteLineKartHandler)
router.delete("/cart/", deleteAllLineKartHandler)
router.patch("/:id", updateLineKartHandler)