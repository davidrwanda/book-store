import { NextFunction } from "express";

export default (fn:any):any => {
    return (name:string, author:string, page:number, year:number, next:NextFunction) => {
      fn(name, author, page, year, next).catch(next);
    };
  };
  