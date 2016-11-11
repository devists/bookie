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


var booksden2 = new booksden({
    isbn : 9781449325947,
    title : 'CSS3: MISSING MANUAL',
    publisher : 'MISSING MANUAL',
    p_year : 2016-02-06,
    edition : 3,
    lang : 'English',
    pages : 650,
    edited_by : 102
});

booksden2.save(function(err, booksden)
{
    if (err) return console.error('err')
    console.log('booksden table created')

});


var booksden3 = new booksden({
    isbn : 9781449363260,
    title : 'HTML:5',
    publisher : 'MISSING MANUAL',
    p_year : 2016-02-06,
    edition : 2,
    lang : 'English',
    pages : 519,
    edited_by : 101

});

booksden3.save(function(err, booksden)
{
    if (err) return console.error('err')
    console.log('booksden table created')

});


var booksden4 = new booksden({
    isbn : 9788178087368,
    title : 'The C Programming Language',
    publisher : 'Prentice HALL',
    p_year : 2016-02-06,
    edition : 2,
    lang : 'English',
    pages : 457,
    edited_by : 101
});

booksden4.save(function(err, booksden)
{
    if (err) return console.error('err')
    console.log('booksden table created')

});


var booksden5 = new booksden({
    isbn : 9780471694205,
    title : 'MATLAB:AN INTRODUCTION WITH AP',
    publisher : 'WILEY',
    p_year : 2016-02-06,
    edition : 5,
    lang : 'English',
    pages : 325,
    edited_by : 102
});

booksden5.save(function(err, booksden)
{
    if (err) return console.error('err')
    console.log('booksden table created')

});

module.exports = booksden;