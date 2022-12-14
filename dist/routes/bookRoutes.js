"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const BookControllerer_1 = require("../controllers/BookControllerer");
const router = express_1.default.Router();
router.route("/")
    .get(BookControllerer_1.BookController.getAllBooks)
    .post(BookControllerer_1.BookController.createBook);
router.route('/book')
    .get(BookControllerer_1.BookController.getbook)
    .delete(BookControllerer_1.BookController.deleteBook)
    .patch(BookControllerer_1.BookController.updateBook);
exports.default = router;
