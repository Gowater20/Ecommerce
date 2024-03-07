import { Request, Response } from "express";
import { IUser } from "../types/user.type";
import { createNewUser } from "../services/users.service";
import { createSecretToken } from "../utilities/auth.funcions";
import { findUserByEmail } from "../services/auth.services";

// creazione nuovo utente
export const SignIn = async (req: Request, res: Response) => {
	const user: IUser = req.body;

	const userByEmail = await findUserByEmail(user.email);
	if (userByEmail) {
		return res.status(400).json({ message: "User mail alredy exist" });
	}
	try {
		const userCreated: IUser = await createNewUser(req.body);
		const token = createSecretToken(userCreated.id!, 30);
	} catch (error: any) {
		res.status(500).json({ error: error.message });
	}
};

// accesso all'account
export const Login = async (req: Request, res: Response) => {
	const user = req.body as { email: string; password: string };
	const userByEmail = await findUserByEmail(user.email);
	if (!userByEmail) {
		return res
			.status(400)
			.json({ message: "User mail not exist or password incorrect" });
	}

	if (userByEmail.password !== user.password) {
		return res
			.status(400)
			.json({ message: "User mail not exist or password incorrect" });
	}

	try {
		const token = createSecretToken(userByEmail.id!, 30);
		return res.status(200).json({ user: userByEmail, token });
	} catch (error: any) {
		res.status(500).json({ error: error.message });
	}
};
