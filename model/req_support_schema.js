/**
 * Created by vermanil on 10/11/16.
 */
var mongoose = require('mongoose');
var Books = require('./booksden_book_schema');
var student = require('./student_schema');

var req_support_schema = mongoose.Schema({
  book_id: [{type: mongoose.Schema.Types.ObjectId, ref: 'Books'}],
  stud_id: [{type: mongoose.Schema.Types.ObjectId, ref: 'student'}],
  comment: String
});

var req_support = mongoose.model('req_support', req_support_schema);

module.exports = req_support;