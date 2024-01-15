import { z } from "zod";

export const booksSchema = z.object({
    id: z.number().min(1).positive(),
    name: z.string().min(3),
    pages: z.number().min(1),
    category: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),

})

export const postBookSchema = booksSchema.partial({ category: true }).omit({ id:true, createdAt: true, updatedAt: true });
export const updateBookSchema = booksSchema.omit({ id: true, updatedAt: true }).partial();