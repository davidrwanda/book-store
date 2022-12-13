import { Request, Response, NextFunction } from "express"
import { BookBuilder, Book } from "../model/book"
import { BookService } from "../services/BookServices"

let title: string = "Hello World"
let author: String = "John doe"
let page: number =20
let year: number = 2020
let publisher: string = "David"
export class  BookController {
    static createBook = () => {
        let bookBuilder:BookBuilder = new BookBuilder(title, author)
        bookBuilder.setPage(page)
        bookBuilder.setPublisher(publisher)
        bookBuilder.setYear(year)

        let book: Book = new Book(bookBuilder)
    
    
        let createBook : Book = BookService.createBook(book)
        console.log(createBook.getName())
        console.log(createBook.getAuthor())
        console.log(createBook.getPage())
        console.log(createBook.getPublisher())
        console.log(createBook.getYear())
        
    

    }
    static getAllBooks = async (req:Request, res:Response, next:NextFunction)=>{
        
    }

   
}
export default BookController