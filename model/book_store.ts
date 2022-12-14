import { Book } from "./book"
class bookStore{
    private books: Array<Book> = []
    addBook(book:Book):Book{
        this.books.push(book)
        return book
    }
    getBooks():Array<Book>{
        return this.books
    }
    updateBook(id:number, book:Book): Book{
        let b = this.books[this.books.findIndex(book=> book.getId() === id)] = book
        return b
    }
    deleteBook(id:number): boolean{
        if(this.books.slice(this.books.findIndex(book => book.getId() === id, 1))) return true
        return false
    }
}
export default bookStore