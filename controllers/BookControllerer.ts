import { Request, Response, NextFunction } from "express"
import { BookBuilder, Book } from "../model/book"
import { BookService } from "../services/BookServices"
import payload from "../helpers/Response"
import httpStatus = require("http-status");
import catchAsyncError from "../helpers/catchAsyncError";
import Logger from "../helpers/Logging";

export class  BookController {
    static createBook = catchAsyncError(async (req:any, res:Request, next:NextFunction) => {
        const book = await BookService.createBook(req)
        if(book) payload.success(res, book, "success", httpStatus.CREATED)
        else payload.fail(res, "error", httpStatus.NOT_ACCEPTABLE)
    })
    static getbook = catchAsyncError(async(req:any, res:Response, next:NextFunction)=>{

        const book:any = await BookService.getbook(req)
        Logger.warning(req.query.id)
        book? payload.success(res, book, "success", httpStatus.OK): payload.fail(res,"Failed to get book", httpStatus.NOT_FOUND)

    })
    static getAllBooks = catchAsyncError (async(req:any, res:Response, next:NextFunction)=>{
        const books:any = await BookService.getBooks(req)
        books ? payload.success(res, books, "success", httpStatus.OK): payload.fail(res,"Failed to get books", httpStatus.NOT_FOUND)
    })
    static updateBook = catchAsyncError(async(req:Request|any, res:Response, next:NextFunction)=>{
        
        const book = await BookService.updateBook(req)
        book ? payload.success(res, book, "updated successfull", httpStatus.OK): payload.fail(res,"Failed to update", httpStatus.NOT_FOUND)
    })

    static deleteBook = catchAsyncError(async (req:Request, res:Response, next:NextFunction)=>{
        let book = await BookService.deleteBook(req)
        book ? payload.success(res, book, "Deleted", httpStatus.OK): payload.fail(res,"Failed to delete book", httpStatus.NOT_FOUND)
    })

   
}
export default BookController