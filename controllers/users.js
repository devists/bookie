var express = require('express');
var router = express.Router();
//var bodyParser = require('body-parser');
var student = require('../model/student_schema');

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.get('/login', function (req, res, next) {
    res.render('login', {})
});

router.post('/login', function (req, res, next) {
    res.render('login', {})
    res.send('successfully login');
});


router.get('/register', function (req, res, next) {
    res.render('register', {})
});

router.post('/', function (req, res, next){
    res.send('successfully register');
    console.log(req.body);
    var newStudent = student(req.body);
    newStudent.save(function (err, newtable) {
        if (err)
            console.log(err)
        else
            res.send('successfuly added user');
            res.render('login', {})
        //console.log("successfully register");
    });
});

module.exports = router;