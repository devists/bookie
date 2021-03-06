/**
 * Created by ansarimofid on 12/11/16.
 */
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var books = require('../model/booksden_book_schema');
var requests = require('../model/book_request_schema');
var requestable = require('../model/requestable_book_schema');
var reqSupport = require('../model/req_support_schema');
var mongoose = require('mongoose');
var session = require('express-session');
var helpers = require('./functions.helpers');

var expressOptions = {
  secret: "secret",
  saveUninitialized: false,
  resave: true
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


router.use(bodyParser.json());
router.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

/**
 * Lists all the requested books
 */
router.get('/', function (req, res, next) {
  books.find({public: false}, function (err, data) {
    if (err)
      console.log(err);
    else
      res.render('explore', {
        action: 'browse',
        type: 'requests',
        data: data,
        resLength: data.length,
        viewUrl: 'requests'
      });
  });

});

/**
 * Adds requested book
 */
router.post('/', function (req, res) {
  var reqData = req.body;
  reqData.public = 0;
  var newBook = books(reqData);
  newBook.save(function (err, book) {
    if (err)
      res.send(err);
    else {
      var bookReq = {};
      bookReq.book_id = book._id;
      bookReq.opened_by = req.session.userData._id;
      bookReq.closed_by = 'open';

      var newRequest = requests(bookReq);
      newRequest.save(function (err, data) {
        if (err)
          res.send(err);

        res.redirect('/books/' + data._id);
      });
    }
  });
});

/**
 * Adds new requested books
 */
router.get('/add', function (req, res, next) {
  res.render('viewBook', {'action': 'add', submitUrl: 'requests'})
});

/**
 * Deletes existing Request and corresponding book data
 */
router.get('/delete/:id', function (req, res, next) {
  var id = req.params.id;

  requests.remove({book_id: id}, function (err, data) {
    if (err)
      res.send(err);

    else {
      books.remove({_id: id}, function (err, data) {
        if (err)
          res.send(err);

        res.send("Successfully Deleted Request");
      });
    }
  });
});

router.post('/support/:id', function (req, res) {
  if (typeof req.session.userData === 'undefined')
    res.json({'status': 0});
  else {
    var bookId = req.params.id;
    var studId = req.session.userData._id;
    // var reqData = req.body;
    // reqData.public = 0;
    var newSupport = reqSupport({book_id: bookId, stud_id: studId});
    newSupport.save(function (err, supp) {
      if (err)
        res.json({status: 0, err: err});
      else {
        res.json({status: 1});
      }
    });
  }
});

router.get('/support', function (req, res) {

  helpers.getSupportCount(function (data) {
    res.json({suppData: data});
  });
});

/**
 * Views detail of requested books
 */
router.get('/:id', function (req, res, next) {
  var id = mongoose.Types.ObjectId(req.params.id);
  books.findOne({_id: id}, function (err, data) {
    if (err)
      res.send(err);
    else
      res.render('detailBook', {data: data});
  });
});

module.exports = router;