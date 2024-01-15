import { Request, Response } from "express";
import { BooksServices } from "../services/books.services";

export class BooksControllers {
  postBooks(req: Request, res: Response): Response {
    const bookService = new BooksServices();

    const newbook = bookService.postBooks(
      req.body
    );

    return res.status(201).json(newbook);
  }

  getBooks(req: Request, res: Response) {
    const booksService = new BooksServices();
    const name = req.query.search
    const response = booksService.getBooks(name);

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
      req.body
    );

    return res.status(200).json(response);
  }

  deleteBooks(req: Request, res: Response): Response {
    const bookService = new BooksServices();

    const response = bookService.deleteBook(req.params.id);

    return res.status(204);
  }
}
