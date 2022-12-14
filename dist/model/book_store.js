"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class bookStore {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
        return book;
    }
    getBooks() {
        return this.books;
    }
    updateBook(id, book) {
        let b = this.books[this.books.findIndex(book => book.getId() === id)] = book;
        return b;
    }
    deleteBook(id) {
        if (this.books.slice(this.books.findIndex(book => book.getId() === id, 1)))
            return true;
        return false;
    }
}
exports.default = bookStore;
