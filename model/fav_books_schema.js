/**
 * Created by vermanil on 10/11/16.
 */
var mongoose = require('mongoose');
var fav_books_schema = mongoose.Schema({
    stud_id : Number,
    isbn : Number
});

var fav_books = mongoose.model('fav_books', fav_books_schema);

/*var fav_books1 = new fav_books({
    stud_id : 201451001,
    isbn : 9780132990448
});


fav_books1.save(function(err, fav_books){
    if (err) return console.error(err);
    console.log('fav_books table created');

});*/

module.exports = fav_books;