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
exports.BookService = void 0;
const book_store_1 = __importDefault(require("../model/book_store"));
let store = new book_store_1.default();
class BookService {
}
exports.BookService = BookService;
_a = BookService;
BookService.createBook = (book) => {
    return store.addBook(book);
};
BookService.getBooks = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield store.getBooks();
});
BookService.deleteBook = (name) => __awaiter(void 0, void 0, void 0, function* () {
    return yield store.deleteBook(name);
});
