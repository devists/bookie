/**
 * Created by vermanil on 10/11/16.
 */
var mongoose = require('mongoose');
var student_schema = mongoose.Schema({
    stud_id : Number,
    batch : Number,
    branch : String,
    fname : String,
    lname : String,
    dob : Date,
    gender : String,
    email : String,
    username : String,
    password : String
});