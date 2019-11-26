const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let personaSchema = new Schema({
    nombre: String,
    apellidos: String,
    edad: Number,
    email: String
});

module.exports = mongoose.model('persona', personaSchema);