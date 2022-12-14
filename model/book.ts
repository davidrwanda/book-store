export class Book
{
    private id: number | undefined;
    private name: string | undefined
    private author: String | undefined
    private year: number | undefined
    private publisher: string | undefined
    private page: number | undefined

    getId(): number | undefined {
        return this.id
    }
    getName(): string | undefined{
        return this.name
    }
    getAuthor(): String | undefined{
        return this.author
    }
    getYear(): number | undefined{
        return this.year
    }
    getPublisher(): string | undefined{
        return this.publisher
    }
    getPage(): number | undefined{
        return this.page
    }

    setId(id:number){
        this.id = id
    }
    setName(name:string){
        this.name = name
    }
    setYear(year:number):void{
        this.year = year

    }
    setPublisher(publisher:string):void{
        this.publisher = publisher

    }
    setPage(page:number):void{
        this.page = page

    }
    setAuthor(author:string):void{
        this.author = author
    }
    
    constructor(bookBuilder :BookBuilder)
    {
        this.name = bookBuilder.getName()
        this.author = bookBuilder.getAuthor()
        this.year = bookBuilder.getYear()
        this.publisher = bookBuilder.getPublisher()
        this.page = bookBuilder.getPage()
        
    }

}

export class BookBuilder {
    private id: number|undefined
    private name: string | undefined
    private author: String | undefined
    private year: number | undefined
    private publisher: string | undefined
    private page: number | undefined

    constructor(id: number|undefined, name: string){
        this.id = id
        this.name = name
    }
    setName(name:string):BookBuilder{
        this.name = name
        return this
    }
    setYear(year:number):BookBuilder{
        this.year = year
        return this

    }
    setPublisher(publisher:string):BookBuilder{
        this.publisher = publisher
        return this

    }
    setPage(page:number):BookBuilder{
        this.page = page
        return this
    }
    getName(): string|undefined{
        return this.name
    }
    getAuthor(): String|undefined{
        return this.author
    }
    getYear(): number|undefined{
        return this.year
    }
    getPublisher(): string|undefined{
        return this.publisher
    }
    getPage(): number|undefined{
            return this.page
    }
}



