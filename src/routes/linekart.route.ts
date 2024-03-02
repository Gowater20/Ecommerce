import { Router } from "express";
import {
	addLineKart,
	deletedLineKart,
	showLineKart,
	updateLineKart,
} from "../controllers/linekart.controller";

export const router = Router();

router.get("/", showLineKart);
router.post("/", addLineKart);
router.delete("/:id", deletedLineKart);
router.patch("/:id", updateLineKart);
