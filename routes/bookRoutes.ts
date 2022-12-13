import express, { Express, Router } from "express";
import {BookController} from "../controllers/BookControllerer";

const router: Router = express.Router()


router.route("/")
                .get(BookController.createBook)
                .post()

router.route("/create")
               .get(BookController.createBook)

export default router
                