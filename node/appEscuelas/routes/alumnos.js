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

router.get('/edit/:alumnoId', (req, res) => {
    Alumno.getById(req.params.alumnoId)
        .then(row => {
            res.render('alumnos/formEdit', { alumno: row })
        }).catch(err => {
            console.log(err);
        });
});

router.post('/create', (req, res) => {
    Alumno.insert(req.body)
        .then(result => {
            res.redirect('/alumnos');
        }).catch(err => {
            console.log(err);
        })
});

router.get('/:alumnoId', async (req, res) => {
    // Alumno.getById(req.params.alumnoId)
    //     .then(row => {
    //         res.render('alumnos/show', { alumno: row })
    //     }).catch(err => {
    //         console.log(err);
    //     });
    const row = await Alumno.getById(req.params.alumnoId);
    res.render('alumnos/show', { alumno: row })
});

router.post('/update', (req, res) => {
    Alumno.updateById(req.body)
        .then(result => {
            res.redirect('/alumnos');
        }).catch(err => {
            console.log(err);
        });
});

module.exports = router;