// DEPENDENCIES 
const mongoose = require('mongoose')
const { Schema } = mongoose 

// SCHEMA
const bookSchema = new Schema({
    title: String,
    description: String,
    year: Number,
    quantity: Number,
    imageURL: String
})

// MODEL AND EXPORT 
const Book = mongoose.model('books', bookSchema)
module.exports = Book