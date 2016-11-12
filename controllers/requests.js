/**
 * Created by ansarimofid on 12/11/16.
 */
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var books = require('../model/booksden_book_schema');
var requests = require('../model/book_request_schema');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

router.get('/', function (req, res, next) {
  books.find({public:false}, function (err, data) {
    if (err)
      console.log(err);
    else
      res.render('explore', {action: 'browse',data: data,resLength:data.length,viewUrl:'reqests'});
  });

});

router.post('/', function (req, res) {
  var reqData = req.body;
  reqData.public = 0;
  var newBook = books(reqData);
  newBook.save(function (err, book) {
    if (err)
      res.send(err);
    else {
      res.send(book._id);
    }
    // res.send("Successfully Added");
  });
});


router.get('/add', function (req, res, next) {
  res.render('viewBook', {'action': 'add', submitUrl: 'requests'})
});


module.exports = router;