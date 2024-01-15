import { Router } from "express"
import { BooksControllers } from "../controllers/books.controllers"
import { validateID, validateName } from "../middlewares/books.middleware"
import { validateBooksSchema } from "../middlewares/validateSchemas.middleware"
import { postBookSchema, updateBookSchema } from "../schemas/books.schemas"

export const booksRouter = Router()

const bookControllers = new BooksControllers()

booksRouter.post("/", validateName.execute, validateBooksSchema.execute({ body: postBookSchema }), bookControllers.postBooks)

booksRouter.get("/", bookControllers.getBooks)

booksRouter.get("/:id", validateID.execute, bookControllers.getOneBook)

booksRouter.patch("/:id", validateID.execute, validateBooksSchema.execute({ body: updateBookSchema }), validateName.execute, bookControllers.updateBooks)

booksRouter.delete("/:id", validateID.execute, bookControllers.deleteBooks)