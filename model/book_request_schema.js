/**
 * Created by vermanil on 10/11/16.
 */
var mongoose = require('mongoose');
var book_request_schema = mongoose.Schema({
    req_id : Number,
    isbn : Number,
    opened_by : Number,
    closed_by : Number
});
