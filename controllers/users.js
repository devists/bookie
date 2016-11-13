var express = require('express');
var router = express.Router();
//var bodyParser = require('body-parser');
var student = require('../model/student_schema');
var session = require('express-session');

var expressOptions = {
  secret: "secret",
  saveUninitialized:false,
  resave:true
};

router.use(session(expressOptions));

router.get('/test',function (req,res) {

  res.send(req.session);

});

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/login', function (req, res, next) {
  res.render('login', {})
});

router.get('/logout',function (req,res) {
  req.session.destroy(function (err) {
    if (err)
      res.send(err);

    res.send("Logout Successfully");
  })
});

router.post('/login', function (req, res, next) {
  student.findOne({username: req.body.username}, function (err, loginData) {
    if (err)
      console.log(err);
    else if (req.body.username === loginData.username && req.body.password === loginData.password) {
      req.session.userData = loginData;
      console.log(loginData);
      res.send('successfully login');
      console.log("successfully login");
    }
    else
      console.log('invalid username or password');
  });
});

router.get('/register', function (req, res, next) {
  res.render('register', {})
});

router.post('/', function (req, res, next) {
  res.send('successfully register');
  console.log(req.body);
  var newStudent = student(req.body);
  newStudent.save(function (err, newtable) {
    if (err)
      console.log(err);
    else
      res.render('login', {});
    //console.log("successfully register");
  });
});

module.exports = router;