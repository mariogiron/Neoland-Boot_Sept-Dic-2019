const express = require('express');
const router = express.Router();

const productosApiRouter = require('./api/productos');

router.use('/productos', productosApiRouter);

module.exports = router;