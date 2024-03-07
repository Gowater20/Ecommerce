import { IUser } from "../types/user.type";
import { User } from "../models/user.model";

// mostra tutti gli utenti
export const showUsers = async (): Promise<IUser[]> => {
  return await User.find();
};

// monstra utente dall'id
export const showUserById = async (id: string): Promise<IUser | null> => {
  return await User.findById(id);
};

//crea nuovo utente
export const createNewUser = async (newUser: IUser): Promise<IUser> => {
  return await User.create(newUser);
};

//cancella utente dall'id
export const deleteUser = async (id: string): Promise<IUser | null> => {
  return await User.findByIdAndDelete(id);
};

// aggiorna utente
export const updateUser = async (
  id: string,
  user: Partial<IUser>
): Promise<IUser | null> => {
  return await User.findByIdAndUpdate(id, user, { new: true });
};
