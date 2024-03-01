import { INameSurname } from "../types/name_surname.type";
import { Names } from "../models/name_surname.model";

export const addNewName = async (name: INameSurname): Promise<INameSurname> => {
  return await Names.create(name);
};

export const deleteName = async (id: string): Promise<INameSurname | null> => {
  return await Names.findByIdAndDelete(id);
};

export const updateName = async (
  id: string,
  newName: Partial<INameSurname>
) => {
  return await Names.findByIdAndUpdate(id, newName);
};
