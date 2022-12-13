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
    getBookByName(name) {
        this.books.forEach(element => {
            if (element.getName() === name)
                return element;
        });
        return undefined;
    }
    getBooks() {
        return this.books;
    }
    updateBookName(book, name, title) {
        this.books.forEach(element => {
            if (element.getName() === name)
                element.setName(title);
            return true;
        });
        return false;
    }
    updateBookAuthor(book, author, title) {
        this.books.forEach(element => {
            if (element.getName() === title)
                element.setAuthor(author);
            return true;
        });
        return false;
    }
    deleteBook(name) {
        if (this.books.slice(this.books.findIndex(book => book.getName() === name, 1)))
            return true;
        return false;
    }
}
exports.default = bookStore;
