/**
 * Created by ansarimofid on 10/11/16.
 */
var express = require('express');
var router = express.Router();
var bookData = require('../data/books.json');

router.get('/',function (req, res, next) {
    res.json(bookData);

});

router.get('/:id',function (req,res,next) {
    // bookData.findBy
});


module.exports = router;