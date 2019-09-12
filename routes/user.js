let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.get('/newuser', function(req, res) {
  res.render('newuser');
});
module.exports = router;
