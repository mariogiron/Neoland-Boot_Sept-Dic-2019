const express = require('express');
const router = express.Router();

const Producto = require('../../models/producto');
const Persona = require('../../models/persona');

router.get('/', (req, res) => {
    Producto.find((err, productos) => {
        res.json(productos);
    });
});

router.post('/', (req, res) => {
    Producto.create(req.body)
        .then(producto => {
            res.json(producto);
        })
});

router.get('/filtrar_precio', (req, res) => {
    // select * from productos where precio = 999 and activo = true
    Producto.find({
        precio: {
            $gt: 200,
            $lt: 2000
        },
        activo: true
    }, (err, productos) => {
        res.json(productos);
    });
});

router.get('/activos', (req, res) => {
    Producto.activos((err, productos) => {
        res.json(productos);
    });
});

router.get('/mismo', (req, res) => {
    let obj = new Producto();
    obj.departamento = 'electrodomesticos';
    obj.mismoDepartamento((err, productos) => {
        res.json(productos);
    });
});

router.get('/relacion', (req, res) => {
    Producto.activos((err, productos) => {
        let pers = new Persona();
        pers.nombre = 'Jose María';
        pers.apellidos = 'García';
        pers.edad = 75;
        pers.email = 'chemita@gmail.com';
        pers.productos = productos;
        pers.save(err => {
            console.log(err);
        })
    });
});

module.exports = router;