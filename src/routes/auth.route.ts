import { Router } from "express";
import { Login, SignIn } from "../controllers/auth.controllers";

export const router = Router();

router.post("/signin", SignIn);
router.post("/login", Login);
