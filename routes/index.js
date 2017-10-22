var express = require('express');
var router = express.Router();
var Dog = require('../models/dog');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/profile', function(req, res, next) {
    res.render('profile', { title: 'Express' });
});

router.get('/type', function(req, res, next) {
    res.render('type', { title: 'Express' });
});

router.get('/interface', function(req, res, next) {
    var dogs = Dog.find();
    res.render('interface', { title: 'Express', dogs: dogs });
});

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});


module.exports = router;
