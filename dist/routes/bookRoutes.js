"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const BookControllerer_1 = require("../controllers/BookControllerer");
const router = express_1.default.Router();
router.route("/")
    .get(BookControllerer_1.BookController.createBook)
    .post();
router.route("/create")
    .get(BookControllerer_1.BookController.createBook);
exports.default = router;
