import { z } from "zod";
import { updateBookSchema, booksSchema, postBookSchema } from "../schemas/books.schemas";

export interface IBooks {
  id: number;
  name: string;
  pages: number;
  category?: string;
  createdAt: Date;
  updatedAt: Date;
}

export type Tbooks = z.infer<typeof booksSchema>;

export type TPostBook = z.infer<typeof postBookSchema>;

export type TUpdateBooks = z.infer<typeof updateBookSchema>;