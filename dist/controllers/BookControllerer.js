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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookController = void 0;
const BookServices_1 = require("../services/BookServices");
const Response_1 = __importDefault(require("../helpers/Response"));
const httpStatus = require("http-status");
const catchAsyncError_1 = __importDefault(require("../helpers/catchAsyncError"));
const Logging_1 = __importDefault(require("../helpers/Logging"));
class BookController {
}
exports.BookController = BookController;
_a = BookController;
BookController.createBook = (0, catchAsyncError_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const book = yield BookServices_1.BookService.createBook(req);
    if (book)
        Response_1.default.success(res, book, "success", httpStatus.CREATED);
    else
        Response_1.default.fail(res, "error", httpStatus.NOT_ACCEPTABLE);
}));
BookController.getbook = (0, catchAsyncError_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const book = yield BookServices_1.BookService.getbook(req);
    Logging_1.default.warning(req.query.id);
    book ? Response_1.default.success(res, book, "success", httpStatus.OK) : Response_1.default.fail(res, "Failed to get book", httpStatus.NOT_FOUND);
}));
BookController.getAllBooks = (0, catchAsyncError_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const books = yield BookServices_1.BookService.getBooks(req);
    books ? Response_1.default.success(res, books, "success", httpStatus.OK) : Response_1.default.fail(res, "Failed to get books", httpStatus.NOT_FOUND);
}));
BookController.updateBook = (0, catchAsyncError_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const book = yield BookServices_1.BookService.updateBook(req);
    book ? Response_1.default.success(res, book, "updated successfull", httpStatus.OK) : Response_1.default.fail(res, "Failed to update", httpStatus.NOT_FOUND);
}));
BookController.deleteBook = (0, catchAsyncError_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let book = yield BookServices_1.BookService.deleteBook(req);
    book ? Response_1.default.success(res, book, "Deleted", httpStatus.OK) : Response_1.default.fail(res, "Failed to delete book", httpStatus.NOT_FOUND);
}));
exports.default = BookController;
