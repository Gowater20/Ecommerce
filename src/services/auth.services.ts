import { User } from "../models/user.model";
import { IUser } from "../types/user.type";

export const findUserByEmail = async (email: string):Promise<IUser | null> => {
    return await User.findOne({email});
}