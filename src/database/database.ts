import { IBooks } from "../interfaces/books.interfaces";

export const booksDatabase: IBooks[] = [];

let id = 0;

export const generateId = () => {
  id++;
  return id;
};
