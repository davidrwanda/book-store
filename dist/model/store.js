"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
const bookSchema = new Schema({
    title: String,
    author: String,
    page: Number,
    year: Number,
    publisher: String,
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    timestamps: true,
});
mongoose_1.default.set('autoIndex', false);
// or
bookSchema.set('autoIndex', false);
const store = mongoose_1.default.model('store', bookSchema);
exports.default = store;
