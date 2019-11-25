const express = require('express');
const router = express.Router();

const apiAlumnosRouter = require('./api/alumnos');

router.use('/alumnos', apiAlumnosRouter);

module.exports = router;