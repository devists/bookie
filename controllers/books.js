/**
 * Created by ansarimofid on 10/11/16.
 */
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var bookData = require('../data/books.js');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

router.get('/', function (req, res, next) {
  // res.json(bookData);
  res.render('explore', {data: bookData})

});

router.post('/', function (req, res, next) {
  res.json(req.body);
  // res.render('explore',{data:bookData})

});

router.get('/new', function (req, res, next) {
  res.render('addBook', {})
});

router.get('/:id', function (req, res, next) {
  // bookData.findBy
});


module.exports = router;