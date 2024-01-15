import { booksDatabase, generateId } from "../database/database";
import { IBooks, TPostBook, TUpdateBooks } from "../interfaces/books.interfaces";

export class BooksServices {
  date = new Date();

  postBooks(data: TPostBook) {
    const newBook = {
      id: generateId(),
      name: data.name,
      pages: data.pages,
      category: data.category,
      createdAt: this.date,
      updatedAt: this.date,
    };

    booksDatabase.push(newBook);

    return newBook;
  }

  getBooks(name?: any) {
    if (name){
      const findBook = booksDatabase.filter((book) => { book.name === name})
      return findBook;
    }
    return booksDatabase;
  }

  getOneBook(id: string) {
    const findProduct = booksDatabase.find((book) => book.id === Number(id));

    return findProduct;
  }

  updateBooks(
    id: string,
    data: TUpdateBooks,
  ): IBooks {
    const editBook = booksDatabase.find((book) => book.id === Number(id)) as IBooks;
    const newBook = {...editBook, ...data, updatedAt: this.date,};

    const index = booksDatabase.findIndex((book) => book.id === Number(id))
    booksDatabase.splice(index, 1, newBook);

    return newBook;
  }

  deleteBook(id: string): any {
    const deleteBook = booksDatabase.findIndex((product) => {
      product.id === Number(id);
    });
    booksDatabase.splice(deleteBook, 1);
  }
}
