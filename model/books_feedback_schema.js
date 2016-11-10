/**
 * Created by vermanil on 10/11/16.
 */
var mongoose = require('mongoose');
var books_feedback_schema = mongoose.Schema({
    isbn : Number,
    stud_id : Number,
    rating : Number,
    reviews : String
});

var books_feedback = mongoose.model('books_feedback', books_feedback_schema);

var books_feedback1 = new books_feedback({
    isbn : 9780132990448,
    stud_id : 201552001,
    rating : 3,
    review : 'good book'
});


books_feedback1.save(function(err, books_feedback)
{
    if (err) return console.error('err')
    console.log('books_feedback table created')

});

module.exports = books_feedback;