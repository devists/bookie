var express = require('express');
var router = express.Router();
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


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {title: 'Bookie'});
});

module.exports = router;