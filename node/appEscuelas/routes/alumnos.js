const express = require('express');
const moment = require('moment');

const router = express.Router();

const Alumno = require('../models/alumno');

router.get('/', (req, res) => {
    Alumno.getAll()
        .then(rows => {
            res.render('alumnos/list', {
                arrAlumnos: rows
            });
        }).catch(err => {
            console.log(err);
        })
});

router.get('/promesa', async (req, res) => {
    const rows = await Alumno.getAll();
    res.render('alumnos/list', { arrAlumnos: rows });
});

router.get('/new', (req, res) => {
    res.render('alumnos/form');
});

router.post('/create', (req, res) => {
    res.json(req.body);
});

module.exports = router;