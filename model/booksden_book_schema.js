/**
 * Created by vermanil on 10/11/16.
 */

var mongoose = require('mongoose');
var booksden_book_schema = mongoose.Schema({
    isbn : Number,
    title : String,
    publisher : String,
    p_year : Date,
    edition : Number,
    lang : String,
    pages : Number,
    edited_by : Number
});

var booksden = mongoose.model('booksden', booksden_book_schema);

var booksden1 = new booksden({
    isbn : 9780132990448,
    title : 'C How to Program',
    publisher : 'Prentice HALL',
    p_year : 2016-02-06,
    edition : 7,
    lang : 'English',
    pages : 650,
    edited_by : 101
});

booksden1.save(function(err, booksden)
{
    if (err) return console.error('err')
    console.log('booksden table created')

});

module.exports = booksden;