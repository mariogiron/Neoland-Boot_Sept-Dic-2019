var express = require('express');
var router = express.Router();

router.use((req, res, next) => {
  console.log('Solo para las rutas con /users');
  let random = Math.random();
  if (random > 0.4) {
    next();
  } else {
    res.send('He salido porque el número aleatorio es ' + random);
  }
});

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

// http://localhost:3000/users/new
router.get('/new', (req, res) => {
  res.send('Creo un nuevo usuario');
});

router.get('/edit', (req, res) => {
  res.send('Editando el usuario')
});

module.exports = router;
