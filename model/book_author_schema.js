/**
 * Created by a_nil on 9/11/16.
 */
var mongoose = require('mongoose');
var book_author_schema = mongoose.Schema({
    isbn : Number,
    author : String
});

var book_author = mongoose.model('book_author', book_author_schema);

module.exports = book_author;