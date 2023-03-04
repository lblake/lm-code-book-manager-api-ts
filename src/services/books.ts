// import { deleteBook } from './../controllers/books_controller';
import { Book } from "../models/book";

export const getBooks = async () => {
	return Book.findAll();
};

export const getBook = async (bookId: number) => {
	return Book.findOne({
		where: { bookId },
	});
};

export const saveBook = async (book: Book) => {
	return Book.create<Book>(book);
};

// User Story 4 - Update Book By Id Solution
export const updateBook = async (bookId: number, book: Book) => {
	return Book.update(book, {
		where: {
			bookId,
		},
	});
};

export const addBook = async (book: Book) => {
	return Book.create<Book>(book);
};

export const deleteBook = async (bookId: number) => {
	return Book.destroy({
		where: {
			bookId,
		},
	});
};
