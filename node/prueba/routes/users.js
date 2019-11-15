var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

// http://localhost:3000/users/new
router.get('/new', (req, res) => {
  res.send('Creo un nuevo usuario');
});

module.exports = router;
