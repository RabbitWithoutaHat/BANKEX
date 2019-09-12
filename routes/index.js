const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('deals');
});

// TODO: изменить данный маршрутизатор с использованием AJAX
router.get('/users', async (req, res) => {
  const response = await fetch('http://192.168.1.197:4000/users/', {});
  const respData = await response.json();
  console.log(respData);

  res.render('users');
});

module.exports = router;
