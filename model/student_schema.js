/**
 * Created by vermanil on 10/11/16.
 */
var mongoose = require('mongoose');
var student_schema = mongoose.Schema({
    stud_id : { type : Number, unique : true },
    batch : Number,
    branch : String,
    fname : String,
    lname : String,
    dob : Date,
    gender : String,
    email : { type : String, unique : true },
    username : { type : String, unique : true },
    password : String
});

var student = mongoose.model('student', student_schema);

module.exports = student;