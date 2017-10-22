var express = require('express');
var router = express.Router();

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

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});


module.exports = router;
