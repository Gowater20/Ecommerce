import { Router } from "express";
// importa da controllers
export const router = Router();

router.post("/signup", SignIn);
router.post("/login", Login);