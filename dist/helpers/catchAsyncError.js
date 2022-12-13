"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (fn) => {
    return (name, author, page, year, next) => {
        fn(name, author, page, year, next).catch(next);
    };
};
