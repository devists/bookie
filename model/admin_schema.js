/**
 * Created by a_nil on 9/11/16.
 */
var mongoose = require('mongoose');
var admin_schema = mongoose.Schema({
    admin_id : { type : Number, unique : true },
    access_level : Number,
    fname : String,
    lname : String,
    dob : Date,
    gender : String,
    email : String,
    username : String,
    password : String
});

var admin = mongoose.model('admin', admin_schema);

var admin1 = new admin(
    {
        admin_id : 101,
        access_level : 0,
        fname : 'james',
        lname : 'cook',
        dob : 1985-07-06,
        gender : 'male',
        email : 'james@iiitvadodara.ac.in',
        username : 'jami',
        password : 'password'
    });

admin1.save(function(err, admin)
{
    if (err) return console.error(err)
    console.log("admin table created");
});

module.exports = admin;