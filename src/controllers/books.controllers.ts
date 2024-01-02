import { Request, Response } from "express";
import { BooksServices } from "../services/books.services";

export class BooksControllers {
  postBooks(req: Request, res: Response): Response {
    const bookService = new BooksServices();

    const newBook = bookService.postBooks(
      req.body.name,
      req.body.pages,
      req.body.category
    );

    return res.status(201).json(newBook);
  }

  getBooks(req: Request, res: Response): Response {
    const booksService = new BooksServices();

    const response = booksService.getBooks();

    return res.status(200).json(response);
  }

  getOneBook(req: Request, res: Response): Response {
    const bookService = new BooksServices();

    const response = bookService.getOneBook(req.params.id);

    return res.status(200).json(response);
  }

  updateBooks(req: Request, res: Response): Response {
    const bookService = new BooksServices();

    const response = bookService.updateBooks(
      req.params.id,
      req.body.name,
      req.body.pages,
      req.body.category
    );

    return res.status(200).json(response);
  }

  deleteBooks(req: Request, res: Response): Response {
    const bookService = new BooksServices();

    const response = bookService.deleteBook(req.params.id);

    return res.status(204);
  }
}
