var express = require('express');
var router = express.Router();
//var bodyParser = require('body-parser');
var admin = require('../model/admin_schema');
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
  next();
});

router.get('/test',function (req,res) {

  res.send(req.session);

});

router.get('/login', function (req, res, next) {
  res.render('login', {user:'admin', submitUrl:'admin'})
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
  admin.findOne({username: req.body.username}, function (err, loginData) {
    if (err)
      console.log(err);
    else if (req.body.username === loginData.username && req.body.password === loginData.password) {
      req.session.userData = loginData;
      console.log("successfully login");
      res.redirect('/requests');
    }
    else
      console.log('invalid username or password');
  });
});

router.get('/register', function (req, res, next) {
  res.render('register', {user:'admin', submitUrl:'admin'})
});

router.post('/', function (req, res, next) {
  // res.send('successfully register');
  // console.log(req.body);
  var newAdmin = admin(req.body);
  newAdmin.save(function (err, data) {

    if (err)
      res.send(err);
    else
      res.render('login', {});
      res.redirect('/admin/login');
  });
});

module.exports = router;