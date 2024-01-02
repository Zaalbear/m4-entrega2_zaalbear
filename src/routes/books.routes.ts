import { Router } from "express"
import { BooksControllers } from "../controllers/books.controllers"
import { validateID, validateName } from "../middlewares/books.middleware"

export const booksRouter = Router()

const bookControllers = new BooksControllers()

booksRouter.post("/", validateName.execute, bookControllers.postBooks)

booksRouter.get("/", bookControllers.getBooks)

booksRouter.get("/:id", validateID.execute, bookControllers.getOneBook)

booksRouter.patch("/:id", validateID.execute, validateName.execute, bookControllers.updateBooks)

booksRouter.delete("/:id", validateID.execute, bookControllers.deleteBooks)