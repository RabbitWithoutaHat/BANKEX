const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('deals');
});

// TODO: изменить данный маршрутизатор с использованием AJAX
router.get('/users', (req, res) => {
  res.render('users');
});

module.exports = router;
