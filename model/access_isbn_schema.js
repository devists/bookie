/**
 * Created by a_nil on 9/11/16.
 */

var mongoose = require('mongoose');

var access_isbn_schema = mongoose.Schema ({
    accession_no : {type :Number, unique : true},
    isbn : {type :Number, unique : true}
});

var access_isbn = mongoose.model('access_isbn', access_isbn_schema);

/*var access = new access_isbn({
    accession_no : 9780132990448,
    isbn : 1001
});

console.log(access.accession_no)

access.save(function(err, access)
{
    if (err) return console.error('err')
    console.log('access_isbn created')

});*/

module.exports = access_isbn;