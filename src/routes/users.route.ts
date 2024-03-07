import { Router } from "express";
import { 
    addNewUserHandler, 
    deleteUserHandler, 
    showUserByIdHandler, 
    updateUserHandler, 
    showUsersHandler
} from "../controllers/users.controllers";

export const router = Router();

router.get("/", showUsersHandler)
router.get("/:id", showUserByIdHandler)
router.post("/", addNewUserHandler)
router.delete("/:id", deleteUserHandler)
router.patch("/:id", updateUserHandler)