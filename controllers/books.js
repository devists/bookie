/**
 * Created by ansarimofid on 10/11/16.
 */
var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var bodyParser = require('body-parser');
var bookData = require('../data/books.js');
// var db = require('../data/books.js');
var books = require('../model/booksden_book_schema');
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

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

/**
 * Renders all Book list
 */
router.get('/', function (req, res, next) {
  books.find({public: true}, function (err, data) {
    if (err)
      console.log(err);
    else
      res.render('explore', {'action': 'browse', data: data, 'resLength': data.length, viewUrl: 'books'});
  });

});


/**
 * Search Redirect
 */
router.get('/search', function (req, res, next) {
  var query = req.query.search;
  res.redirect('/books/search/' + query);
});

/**
 * Search Books and Render Page
 */
router.get('/search/:queryString', function (req, res, next) {
  var query = req.params.queryString;
  books.find({$text: {$search: query}}, function (err, result) {
    if (err)
      res.send(err);

    res.render('explore', {'action': 'search', 'query': query, 'data': result, 'resLength': result.length})
  });
});

/**
 * Adds Book to databse
 */
router.post('/', function (req, res, next) {
  var reqData = req.body;
  reqData.public = 1;
  var newBook = books(reqData);
  newBook.save(function (err, table) {
    if (err)
      res.send(err);
    else
      res.send("Successfully Added");
  });
});

/**
 * Renders add Book form
 */
router.get('/add', function (req, res, next) {
  res.render('viewBook', {'action': 'add', submitUrl: 'books'})
});

/**
 * Renders edit book form
 */
router.get('/edit/:id', function (req, res, next) {
  var id = req.params.id;

  books.findOne({_id: id}, function (err, data) {
    if (err)
      res.send(err);

    res.render('viewBook', {'action': 'edit', 'data': data})
  });
});

/**
 * Saves edited detail of the book
 */
router.post('/edit/save/:id', function (req, res, next) {
  var id = req.params.id;

  books.findById(id, function (err, bookData) {
    if (err)
      res.send(err);
    bookData.update(req.body, function (err) {
      if (err)
        res.send(err);
      else
        res.send("Successfully Edited");
    });
  });

});

/**
 * Deletes existing book
 */
router.get('/delete/:id', function (req, res, next) {
  var id = req.params.id;

  books.remove({_id: id}, function (err, data) {
    if (err)
      res.send(err);

    res.send("Successfully Deleted");
  });
});

/**
 * Views detail of the book
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