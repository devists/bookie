/**
 * Created by a_nil on 9/11/16.
 */
var mongoose = require('mongoose');
var book_author_schema = mongoose.Schema({
    isbn : Number,
    author : String
});
