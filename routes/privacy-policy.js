var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('privacy-policy', {title:"Privacy policy"});
});

module.exports = router;
