/**
 * Created by vermanil on 10/11/16.
 */
var mongoose = require('mongoose');
var fav_books_schema = mongoose.Schema({
    stud_id : Number,
    isbn : Number
});