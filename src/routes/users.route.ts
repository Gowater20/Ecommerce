import { Router } from "express";
import { 
    addNewUserHandler, 
    deleteUserHandler, 
    showUserByIdHandler, 
    showUserHandler, 
    updateUserHandler 
} from "../controllers/users.controllers";

export const router = Router();

router.get("/", showUserHandler)
router.get("/:id", showUserByIdHandler)
router.post("/", addNewUserHandler)
router.delete("/:id", deleteUserHandler)
router.patch("/:id", updateUserHandler)