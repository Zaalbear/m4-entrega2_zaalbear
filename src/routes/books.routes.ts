import { Router } from "express"
import { BooksControllers } from "../controllers/books.controllers"

export const booksRouter = Router()

const bookControllers = new BooksControllers()

booksRouter.post("/", bookControllers.postBooks)

booksRouter.get("/", bookControllers.getBooks)

booksRouter.get("/:id", bookControllers.getOneBook)

booksRouter.patch("/:id", bookControllers.updateBooks)

booksRouter.delete("/:id", bookControllers.deleteBooks)