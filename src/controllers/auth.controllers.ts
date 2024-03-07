import { Request, Response } from "express";
import { IUser } from "../types/user.type";
import { addNewUser } from "../services/users.service";
import { createSecretToken } from "../utilities/auth.funcions";

export const SignIn = async (req: Request, res: Response) => {
    const user : IUser = req.body;
    try {
        const userCreated: IUser = await addNewUser(req.body);
        const token = createSecretToken(userCreated.id!, 30)
    } catch (error: any) {
        res.status(500).json({error: error.message})
    }
}