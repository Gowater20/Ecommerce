import {
	lineKartShow,
	linekartAdd,
	linekartUpdate,
	linekartdeleted,
} from "../services/linekart.service";
import { Request, Response } from "express";

export const showLineKart = async (req: Request, res: Response) => {
	try {
		const linekart = await lineKartShow();
		res.status(200).json(linekart);
	} catch (error) {
		res.status(400).json(error);
	}
};

export const addLineKart = async (req: Request, res: Response) => {
	console.log("help me");
	try {
		const linekart = await linekartAdd(req.body);
		res.status(200).json({ meassage: "line kard added :", linekart });
	} catch (error) {
		res.status(400).json(error);
	}
};

export const deletedLineKart = async (req: Request, res: Response) => {
	try {
		const linekart = await linekartdeleted(req.params.id);
		res.status(200).json({ message: "linekart deleted:", linekart });
	} catch (error) {
		res.status(200).json(error);
	}
};

export const updateLineKart = async (req: Request, res: Response) => {
	try {
		const linekart = await linekartUpdate(req.params.id, req.body);
		res.status(200).json({ message: "linekart updated:", linekart });
	} catch {
		res.status(400).json("error");
	}
};
