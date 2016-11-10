/**
 * Created by vermanil on 10/11/16.
 */
var mongoose = require('mongoose');
var requestable_schema_schema = mongoose.Schema({
    isbn : Number,
    title : String,
    description : text,
    publisher : String,
    p_year : Number,
    edition : Number,
    lang : String,
    pages : Number
});
