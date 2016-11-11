/**
 * Created by vermanil on 10/11/16.
 */
var mongoose = require('mongoose');
var requestable_book_schema = mongoose.Schema({
    isbn : Number,
    title : String,
    description : String,
    publisher : String,
    p_year : Number,
    edition : Number,
    lang : String,
    pages : Number
});

var requestable_book = mongoose.model('requestable_book', requestable_book_schema);
/*

var requestable_book1 = new requestable_book({
    isbn : 9789380658742,
    title : 'The Immortals Of Meluha',
    description : 'Want this',
    publisher : 'wilson',
    p_year : 2013,
    edition : 1,
    lang : 'English',
    pages : 418

});

requestable_book1.save(function(err, requestable_book){
    if (err) return console.error(err);
    console.log('requestable_book table created');

});
*/

module.exports = requestable_book;