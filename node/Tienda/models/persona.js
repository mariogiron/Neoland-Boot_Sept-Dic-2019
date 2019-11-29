const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let personaSchema = new Schema({
    nombre: String,
    apellidos: String,
    edad: Number,
    email: String,
    productos: [{ type: Schema.Types.ObjectId, ref: 'producto' }]
});

personaSchema.virtual('nombre_completo').get(function () {
    return this.nombre + " " + this.apellidos;
});

personaSchema.virtual('nombre_completo').set(function (newValue) {
    // pers.nombre_completo = "Antonio Martín";
    const split = newValue.split(' ');
    this.nombre = split[0];
    this.apellidos = split[1];
});

module.exports = mongoose.model('persona', personaSchema);