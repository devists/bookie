/**
 * Created by a_nil on 9/11/16.
 */

var mongoose = require('mongoose');

var access_isbn_schema = mongoose.Schema ({
    accession_no : {type :Number, unique : true},
    isbn : {type :Number, unique : true}
});

var access_isbn = mongoose.model('access_isbn', access_isbn_schema);


module.exports = access_isbn;