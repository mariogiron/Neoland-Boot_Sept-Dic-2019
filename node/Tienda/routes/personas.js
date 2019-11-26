const express = require('express');
const router = express.Router();

const Persona = require('../models/persona');

router.get('/', (req, res) => {
    Persona.find((err, personas) => {
        if (err) return console.log(err);
        res.render('personas/lista', {
            arrPersonas: personas
        })
    });
});

router.get('/insert_v1', (req, res) => {
    let pers = new Persona();
    pers.nombre = 'Amalia';
    pers.apellidos = 'Rodríguez';
    pers.edad = 87;
    pers.email = 'amalita@gmail.com'
    console.log(pers);

    pers.save((err) => {
        console.log(pers);
    });

    res.send('Insertando V1');
});

router.get('/insert_v2', (req, res) => {
    Persona.create({
        nombre: 'Rosarito',
        apellidos: 'Martín',
        edad: 44,
        email: 'rosi@gmail.com'
    }).then(persona => {
        console.log(persona);
    });

    res.send('Insertando V2');
});

router.get('/insert_v3', async (req, res) => {
    let pers = await Persona.create({
        nombre: 'Rosarito',
        apellidos: 'Martín',
        edad: 44,
        email: 'rosi@gmail.com'
    });
    res.json(pers);
})


module.exports = router;