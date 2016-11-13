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
  next();
});

router.get('/test',function (req,res) {

  res.send(req.session);

});

router.get('/login', function (req, res, next) {
  res.render('login',  {user:'student', submitUrl:'users'})
});

router.get('/logout',function (req,res) {
  req.session.destroy(function (err) {
    if (err)
      res.send(err);

    res.redirect('/books');
  })
});

router.post('/login', function (req, res, next) {
  student.findOne({username: req.body.username}, function (err, loginData) {
    if (err)
      console.log(err);
    else if (req.body.username === loginData.username && req.body.password === loginData.password) {
      req.session.userData = loginData;
      // res.locals.userType = 'student';
      res.redirect('/books');
      console.log("successfully login");
    }
    else
      console.log('invalid username or password');
      //res.redirect('/users/login')
      //res.render('/users/login', {})
  });
});

router.get('/register', function (req, res, next) {
  res.render('register', {user:'student', submitUrl:'users', action : 'register'})
});

router.get('/settings', function (req, res, next) {
    if (!req.session.userData._id)
        res.redirect('/users/login');
    else
        var id = req.session.userData._id;

        student.findOne({_id: id}, function (err, data) {
            if (err)
                res.send(err);

            res.render('register', {'action': 'edit', 'data': data, user : 'student', submitUrl : 'users'})
            console.log(data);
    });
});

router.post('/settings/save', function (req, res, next) {
    var id = req.session.userData._id;

    student.findById(id, function (err, studentData) {
        if (err)
            res.send(err);
        else
            studentData.update(req.body, function (err) {
                if (err)
                    res.send(err);
                else
                    res.send("Successfully Edited");
            });
    });

});


router.post('/', function (req, res, next) {
  //res.send('successfully register');
  // console.log(req.body);
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