/**
 * Created by ansarimofid on 09/11/16.
 */

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    // res.send('From Home');
    res.render('test', { title: 'Projectile' });
});

module.exports = router;