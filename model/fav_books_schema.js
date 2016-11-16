/**
 * Created by vermanil on 10/11/16.
 */
var mongoose = require('mongoose');
var books = require('./booksden_book_schema');
var student = require('./student_schema');
var fav_books_schema = mongoose.Schema({
    book_id: [{type: mongoose.Schema.Types.ObjectId, ref: 'books'}],
    stud_id: [{type: mongoose.Schema.Types.ObjectId, ref: 'student'}]
});

var fav_books = mongoose.model('fav_books', fav_books_schema);

module.exports = fav_books;