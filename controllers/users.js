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

/**
 * Middleware to store local login data
 */
router.use(function (req, res, next) {
  res.locals.session = req.session.userData;
  console.log(res.locals.session);
  next();
});

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

    //res.send("Logout Successfully");
    res.redirect('/books');
  })
});

router.post('/login', function (req, res, next) {
  student.findOne({username: req.body.username}, function (err, loginData) {
    if (err)
      console.log(err);
    else if (req.body.username === loginData.username && req.body.password === loginData.password) {
      req.session.userData = loginData;
      res.locals.session = loginData;
      console.log(res.locals.session);
      //res.send('successfully login');
      res.redirect('/books');
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
  //res.send('successfully register');
  console.log(req.body);
  var newStudent = student(req.body);
  newStudent.save(function (err, newtable) {
    if (err)
      console.log(err);
    else
      res.render('login', {});
      res.redirect('/users/login')
    //console.log("successfully register");
  });
});

module.exports = router;