/**
 * Created by vermanil on 10/11/16.
 */
var mongoose = require('mongoose');
var books_feedback_schema = mongoose.Schema({
    isbn : Number,
    stud_id : Number,
    rating : Number,
    reviews : text
});