const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('listaPersonas', {
        nombre: 'Mario',
        clases: ['uno', 'dos', 'tres', 'cuatro'],
        manzanas: 2
    });
});

router.get('/new', (req, res) => {
    res.send('Ruta /personas/new');
});

router.post('/create', (req, res) => {
    res.send('Ruta /personas/create');
});

module.exports = router;