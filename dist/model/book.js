"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookBuilder = exports.Book = void 0;
class Book {
    getName() {
        return this.name;
    }
    getAuthor() {
        return this.author;
    }
    getYear() {
        return this.year;
    }
    getPublisher() {
        return this.publisher;
    }
    getPage() {
        return this.page;
    }
    setName(name) {
        this.name = name;
    }
    setYear(year) {
        this.year = year;
    }
    setPublisher(publisher) {
        this.publisher = publisher;
    }
    setPage(page) {
        this.page = page;
    }
    setAuthor(author) {
        this.author = author;
    }
    constructor(bookBuilder) {
        this.name = bookBuilder.getName();
        this.author = bookBuilder.getAuthor();
        this.year = bookBuilder.getYear();
        this.publisher = bookBuilder.getPublisher();
        this.page = bookBuilder.getPage();
    }
}
exports.Book = Book;
class BookBuilder {
    constructor(name, author) {
        this.name = name;
        this.author = author;
    }
    setName(name) {
        this.name = name;
        return this;
    }
    setYear(year) {
        this.year = year;
        return this;
    }
    setPublisher(publisher) {
        this.publisher = publisher;
        return this;
    }
    setPage(page) {
        this.page = page;
        return this;
    }
    getName() {
        return this.name;
    }
    getAuthor() {
        return this.author;
    }
    getYear() {
        return this.year;
    }
    getPublisher() {
        return this.publisher;
    }
    getPage() {
        return this.page;
    }
}
exports.BookBuilder = BookBuilder;
