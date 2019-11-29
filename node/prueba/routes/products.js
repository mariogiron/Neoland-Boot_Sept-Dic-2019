const express = require('express');
const router = express.Router();

// http://localhost:3000/productos
router.get('/', (req, res) => {
    res.send('Ruta /productos');
});

router.get('/new', (req, res) => {
    res.send('Ruta /new')
});

router.get('/all.json', (req, res) => {
    const arrProds = [
        { nombre: 'Thermomix', precio: 1000 },
        { nombre: 'Lavadora Bosch', precio: 564 },
        { nombre: 'Horno Pirolítico', precio: 455 }
    ];
    res.json(arrProds);
});

// http://localhost:3000/productos/43
router.get('/:idProducto', (req, res) => {
    console.log(req.params);
    res.send('Recupero un producto por su ID');
});

/*
    ¡¡PETICIONES POST!! 💃
*/

router.post('/create', (req, res) => {
    console.log(req.body);
    res.send('petición /productos/create');
});

module.exports = router;