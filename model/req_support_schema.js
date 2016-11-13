/**
 * Created by vermanil on 10/11/16.
 */
var mongoose = require('mongoose');

var req_support_schema = mongoose.Schema ({
    stud_id : Number,
    comment : String
});

var req_support = mongoose.model('req_support', req_support_schema);

/*
var req_support1 = new req_support({
    req_id : 777001,
    stud_id : 201451001,
    comment : 'i really need this book'
});

req_support1.save(function(err,req_support)
{
    if (err) return console.log(err)
    console.log('req_support table created');
});
*/

module.exports = req_support;