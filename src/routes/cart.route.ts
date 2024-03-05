import { deleteAllLineKartHandler, 
        deleteLineKartHandler, 
        showCartHandler, 
        updateLineKartHandler 
        } from "../controllers/cart.controllers";
        
import { router } from "./users.route";

router.get("/", showCartHandler)
router.delete("/:id", deleteLineKartHandler)
router.delete("/cart/", deleteAllLineKartHandler)
router.patch("/:id", updateLineKartHandler)