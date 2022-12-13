"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookController = void 0;
const book_1 = require("../model/book");
const BookServices_1 = require("../services/BookServices");
let title = "Hello World";
let author = "John doe";
let page = 20;
let year = 2020;
let publisher = "David";
class BookController {
}
exports.BookController = BookController;
_a = BookController;
BookController.createBook = () => {
    let bookBuilder = new book_1.BookBuilder(title, author);
    bookBuilder.setPage(page);
    bookBuilder.setPublisher(publisher);
    bookBuilder.setYear(year);
    let book = new book_1.Book(bookBuilder);
    let createBook = BookServices_1.BookService.createBook(book);
    console.log(createBook.getName());
    console.log(createBook.getAuthor());
    console.log(createBook.getPage());
    console.log(createBook.getPublisher());
    console.log(createBook.getYear());
};
BookController.getAllBooks = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
});
exports.default = BookController;
