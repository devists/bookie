var mongoose = require('mongoose');

var access_isbn = require('./access_isbn_schema');
var student = require('./student_schema');
var admin = require('./admin_schema');
var req_support = require('./req_support_schema');
var booksden = require('./booksden_book_schema');
var books_feedback = require('./books_feedback_schema');
var book_author = require('./book_author_schema');
var book_category = require('./book_category_schema');
var book_request = require('./book_request_schema');
var fav_books = require('./fav_books_schema');
var category_details = require('./category_details_schema');
var requestable_book = require('./requestable_book_schema');

mongoose.connect('mongodb://bookie:bookiedb1@ds149207.mlab.com:49207/bookie');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("we are connected");
});

module.exports = db;
