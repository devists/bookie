/**
 * Created by vermanil on 10/11/16.
 */
var mongoose = require('mongoose');
var book_category_schema = mongoose.Schema({
    isbn : Number,
    category_id : Number
});