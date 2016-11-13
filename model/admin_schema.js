/**
 * Created by a_nil on 9/11/16.
 */
var mongoose = require('mongoose');
var admin_schema = mongoose.Schema({
    fname : String,
    lname : String,
    dob : Date,
    gender : String,
    email : String,
    username : String,
    password : String
});

var admin = mongoose.model('admin', admin_schema);

module.exports = admin;