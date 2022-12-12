import express, { Express, Router } from "express";
import BookController from "../controllers/bookControllerer";

const router: Router = express.Router()

router.route("/")
                .get(BookController.getAllBooks)
                .post()
                