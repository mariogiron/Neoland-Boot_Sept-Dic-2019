const express = require('express');
const router = express.Router();

const Alumno = require('../../models/alumno');

// GET http://localhost:3000/api/alumnos
router.get('/', async (req, res) => {
    const rows = await Alumno.getAll();
    res.json(rows);
});

// POST http://localhost:3000/api/alumnos
router.post('/', async (req, res) => {
    const result = await Alumno.insert(req.body);
    if (result['affectedRows'] === 1) {
        const alumno = await Alumno.getById(result['insertId']);
        res.json(alumno);
    } else {
        res.json({ error: 'Error en la inserción' });
    }
});

// PUT http://localhost:3000/api/alumnos
router.put('/', async (req, res) => {
    const result = await Alumno.updateById(req.body);
    if (result['affectedRows'] === 1) {
        const alumno = await Alumno.getById(req.body.id);
        res.json(alumno);
    } else {
        res.json({ error: 'Error en la inserción' });
    }
});

// DELETE http://localhost:3000/api/alumnos
router.delete('/', async (req, res) => {
    const result = await Alumno.deleteById(req.body.id);
    if (result['affectedRows'] === 1) {
        res.json({ exito: 'Alumno borrado con éxito' });
    } else {
        res.json({ error: 'No se ha borrado el alumno' });
    }
});

module.exports = router;