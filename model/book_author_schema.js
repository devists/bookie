/**
 * Created by a_nil on 9/11/16.
 */
var mongoose = require('mongoose');
var book_author_schema = mongoose.Schema({
    isbn : Number,
    author : String
});

var book_author = mongoose.model('book_author', book_author_schema);

/*var book_author1 = new book_author({
    isbn : 9780132990448,
    author : 'Paul Dietel & Harvey'
});

book_author1.save(function(err, book_author){
    if (err) return console.error(err);
    console.log('book_author table created');

});*/

module.exports = book_author;