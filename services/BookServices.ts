
import bookStore from "../model/book_store";
import {Book} from "../model/book";
import Store from "../model/store";
import { NextFunction } from "express";
import Logger from "../helpers/Logging";
import { off } from "process";

let store:bookStore = new bookStore()

export class BookService {
    static createBook = async(req:Request):Promise<any> =>{
        return await Store.create(req.body) 
    }
    static getbook = async(req:Request|any):Promise<any> =>{

        return await Store.findById(req.query.id)
        
    }
    static getBooks = async (req:Request):Promise<any> =>{
        return await Store.find((err:any)=>{
            err?Logger.err(err):Logger.info("successfull loaded books")
        }).clone().catch((err:any)=>{Logger.err(err)})
    }
    
    static updateBook = async (req:any):Promise<any> =>{
        return await Store.findByIdAndUpdate(req.query.id, req.body)
    }
    static deleteBook = async (req:any):Promise<any> =>{
        return await Store.findByIdAndDelete(req.query.id)
    }
}