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

router.get('/new', (req, res) => {
    res.render('personas/form');
});

router.get('/edit/:personaId', (req, res) => {
    Persona.findById(req.params.personaId, (err, persona) => {
        res.render('personas/formEdit', { pers: persona });
    });
});

router.get('/delete/:personaId', (req, res) => {
    Persona.findByIdAndDelete(req.params.personaId, (err, persona) => {
        res.redirect('/personas');
    });
});

router.post('/update', (req, res) => {
    Persona.findByIdAndUpdate(req.body.id, req.body, { new: true }, (err, persona) => {
        res.redirect('/personas');
    });
});

router.post('/create', (req, res) => {
    Persona.create(req.body)
        .then(persona => {
            res.redirect('/personas');
        }).catch(err => {
            res.json(err);
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