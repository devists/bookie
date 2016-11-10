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

var book_request = mongoose.model('book_request', book_request_schema);

var book_request1 = new book_request({
    req_id : 777001,
    isbn : 9789380658742,
    opened_by : 201451001,
    closed_by : 101
});

book_request1.save(function(err, book_request){
    if (err) return console.error(err);
    console.log('book_request table created');

});

module.exports = book_request;