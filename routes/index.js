var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var controller = require('./../controllers/controller.js');

// VIEW
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/get', function (req, res) {
   res.render("index_get.html");
});

router.get('/post', function (req, res) {
   res.render("index_post.html");
});

// CONTROLLER
router.get('/process_get', function (req, res) {
   var response = controller.calculate(req.query);
   res.end(JSON.stringify(response));
});

router.post('/process_post', urlencodedParser, function (req, res) {
   var response = controller.calculate(req.body);
   res.end(JSON.stringify(response));
});

module.exports = router;