const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('newuser');
});

// TODO: изменить данный маршрутизатор с использованием AJAX
router.post('/rolls', (req, res) => {
  console.log(req.body);
  console.log(req.body);

  const die = new Die(Number(req.body.rollSide));
  res.json({
    die,
    roll: die.roll(),
  });
});

module.exports = router;
