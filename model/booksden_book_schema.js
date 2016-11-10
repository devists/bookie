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
