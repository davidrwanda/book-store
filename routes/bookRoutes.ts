import express, { Express, Router } from "express";
import {BookController} from "../controllers/BookControllerer";

const router: Router = express.Router()

router.route("/")
                .get(BookController.getAllBooks)
                .post(BookController.createBook)

router.route('/book')
                    .get(BookController.getbook)
                    .delete(BookController.deleteBook)
                    .patch(BookController.updateBook)

export default router
                