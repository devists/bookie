/**
 * Created by vermanil on 10/11/16.
 */

var categoryDetail = require('./category_details_schema');
var mongoose = require('mongoose');
var book_category_schema = mongoose.Schema({
    isbn : { type : Number, unique : true },
    category_id : [{type: mongoose.Schema.Types.ObjectId, ref: 'categoryDetail'}]
});

var book_category = mongoose.model('book_category', book_category_schema);

/*var book_category1 = new book_category({
    isbn : 9780132990448,
    category_id : 999003
});

book_category1.save(function(err, book_category){
    if (err) return console.error(err);
    console.log('book_category table created');

});*/

module.exports = book_category;