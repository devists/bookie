/**
 * Created by ansarimofid on 10/11/16.
 */
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var bookData = require('../data/books.js');
// var db = require('../data/books.js');
var books = require('../model/booksden_book_schema');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

/**
 * Renders all Book list
 */
router.get('/', function (req, res, next) {
  books.find({}, function (err, data) {
    if (err)
      console.log(err);
    else
      res.render('explore', {data: data});
  });

});

/**
 * Adds Book to databse
 */
router.post('/', function (req, res, next) {
  var newBook = books(req.body);
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
  res.render('viewBook', {'action': 'add'})
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
  var id = req.params.id;
  books.findOne({_id: id}, function (err, data) {
    if (err)
      res.send(err);
    else
      res.send(data);
  });
});

module.exports = router;