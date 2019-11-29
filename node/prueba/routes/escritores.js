const express = require('express');
const router = express.Router();

const escritoresDb = require('../db/escritores');

router.get('/', (req, res) => {
    console.log(escritoresDb);
    res.render('listaEscritores', {
        arrEscritores: escritoresDb
    });
})

module.exports = router;