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
    Dog.find(function (err, docs) {
        var dogs = [];
        for (var i = 0, n = docs.length; i < n; i += 1) {
            dogs.push(docs.slice(i, i + 1));
        }
        res.render('interface', {title: 'Express', dogs: dogs});
    })
});

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});


module.exports = router;
