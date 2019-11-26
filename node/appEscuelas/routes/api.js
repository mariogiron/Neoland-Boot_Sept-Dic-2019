const express = require('express');
const router = express.Router();

const apiAlumnosRouter = require('./api/alumnos');
const apiUsuariosRouter = require('./api/usuarios');

router.use('/alumnos', apiAlumnosRouter);
router.use('/usuarios', apiUsuariosRouter);

module.exports = router;