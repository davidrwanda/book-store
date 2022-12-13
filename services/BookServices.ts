
import bookStore from "../model/book_store";
import {Book} from "../model/book";

let store:bookStore = new bookStore()

export class BookService {
    static createBook = (book:Book):Book =>{
        return store.addBook(book)
    }
    static getBooks = async ():Promise<Book[]> =>{
        return await store.getBooks()
    }
    static deleteBook = async (name:string):Promise<boolean> =>{
        return await store.deleteBook(name)
    }
}