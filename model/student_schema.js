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
    email : String,
    username : String,
    password : String
});

var student = mongoose.model('student', student_schema);

/*var student1 = new student(
    {
        stud_id : 201552001,
        batch : 2015,
        branch : 'IT',
        fname : 'Shnaya',
        lname : 'Sharma',
        dob : 1996-06-12,
        gender : 'female',
        email : 'shnayaa@iiitvadodara.ac.in',
        username : 'shnaya',
        password : 'password'
    });

student1.save(function(err, student)
{
   if (err) return console.error(err)
    console.log("student table created");
});*/

module.exports = student;