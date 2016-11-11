/**
 * Created by ansarimofid on 10/11/16.
 */
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var bookData = require('../data/books.js');
// var db = require('../data/books.js');
var books =require('../model/booksden_book_schema');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

router.get('/', function (req, res, next) {
  // res.json(bookData);
  res.render('explore', {data: bookData})

});

router.post('/', function (req, res, next) {
  var newBook = books(req.body);
  newBook.save(function (err,table) {
    if (err)
      res.send(err);
    else
      res.send("Successfully Added");
  });
  // res.json(req.body);
  // res.render('explore',{data:bookData})

});

router.get('/new', function (req, res, next) {
  res.render('addBook', {})
});

router.get('/:id', function (req, res, next) {
  // bookData.findBy
});


module.exports = router;