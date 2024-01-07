import { NextFunction, Request, Response } from "express";
import { booksDatabase } from "../database/database";
import { AppError } from "../errors/AppErros";

export class validateID {
  static execute(req: Request, res: Response, next: NextFunction) {
    if (!booksDatabase.some((book) => book.id === Number(req.params.id))) {
      throw new AppError(404, "Book not found.");
    }

    return next();
  }
}

export class validateName {
  static execute(req: Request, res: Response, next: NextFunction) {
    if (booksDatabase.some((book) => book.name === req.body.name)) {
      throw new AppError(409, "Book already registered.");
    }

    return next();
  }
}
