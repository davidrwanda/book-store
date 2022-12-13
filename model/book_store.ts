import { Book } from "./book"
class bookStore{
    private books: Array<Book> = []
    addBook(book:Book):Book{
        this.books.push(book)
        return book
    }
    getBookByName(name:string):Book|undefined{
        this.books.forEach(element => {
            if(element.getName() === name) return element
        })
        return undefined
    }
    getBooks():Array<Book>{
        return this.books
    }
    updateBookName(book:Book, name:string, title:string): boolean {
        this.books.forEach(element => {
            if(element.getName() === name) element.setName(title)
            return true
        })
        return false
    }
    updateBookAuthor(book:Book, author:string, title:string):boolean{
        this.books.forEach(element => {
            if(element.getName() === title) element.setAuthor(author)
            return true
        })
        return false
    }
    deleteBook(name:string): boolean{
        if(this.books.slice(this.books.findIndex(book => book.getName() === name, 1))) return true
        return false
    }
}
export default bookStore