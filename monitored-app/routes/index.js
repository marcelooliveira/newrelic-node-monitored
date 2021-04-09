var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {
  await new Promise(resolve => setTimeout(resolve, 10000));
  res.render('index', { title: 'Express' });
});

module.exports = router;
