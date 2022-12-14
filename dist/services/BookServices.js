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
const store_1 = __importDefault(require("../model/store"));
const Logging_1 = __importDefault(require("../helpers/Logging"));
let store = new book_store_1.default();
class BookService {
}
exports.BookService = BookService;
_a = BookService;
BookService.createBook = (req) => __awaiter(void 0, void 0, void 0, function* () {
    return yield store_1.default.create(req.body);
});
BookService.getbook = (req) => __awaiter(void 0, void 0, void 0, function* () {
    return yield store_1.default.findById(req.query.id);
});
BookService.getBooks = (req) => __awaiter(void 0, void 0, void 0, function* () {
    return yield store_1.default.find((err) => {
        err ? Logging_1.default.err(err) : Logging_1.default.info("successfull loaded books");
    }).clone().catch((err) => { Logging_1.default.err(err); });
});
BookService.updateBook = (req) => __awaiter(void 0, void 0, void 0, function* () {
    return yield store_1.default.findByIdAndUpdate(req.query.id, req.body);
});
BookService.deleteBook = (req) => __awaiter(void 0, void 0, void 0, function* () {
    return yield store_1.default.findByIdAndDelete(req.query.id);
});
