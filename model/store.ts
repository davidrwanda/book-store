import mongoose from "mongoose"
const {Schema}:any = mongoose

const bookSchema= new Schema({
    title:String,
    author:String,
    page:Number,
    year:Number,
    publisher:String,
},
{
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    timestamps: true,
})

mongoose.set('autoIndex', false);
// or
bookSchema.set('autoIndex', false);

const store = mongoose.model('store', bookSchema)

export default store