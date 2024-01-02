import { booksDatabase, generateId } from "../database/database";
import { IBooks } from "../interfaces/books.interfaces";

export class BooksServices {
  date = new Date();

  postBooks(name: string, pages: number, category: string) {
    const newBook: IBooks = {
      id: generateId(),
      name,
      pages,
      category,
      createdAt: this.date,
      updatedAt: this.date,
    };

    booksDatabase.push(newBook);

    return newBook;
  }

  getBooks() {
    return booksDatabase;
  }

  getOneBook(id: string) {
    const findProduct = booksDatabase.find((book) => book.id === Number(id));

    return findProduct;
  }

  updateBooks(
    id: string,
    name?: string,
    pages?: number,
    category?: string
  ): IBooks {
    const editBook = booksDatabase.findIndex((book) => book.id === Number(id));
    const newBook = {
      id: Number(id),
      name: name ? name : booksDatabase[editBook].name,
      pages: pages ? pages : booksDatabase[editBook].pages,
      category: category ? category : booksDatabase[editBook].category,
      createdAt: booksDatabase[editBook].createdAt,
      updatedAt: this.date,
    };

    booksDatabase.splice(editBook, 1, newBook);

    return newBook;
  }

  deleteBook(id: string): any {
    const deleteBook = booksDatabase.findIndex((product) => {
      product.id === Number(id);
    });
    booksDatabase.splice(deleteBook, 1);
  }
}
