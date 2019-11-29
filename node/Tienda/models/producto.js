const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let productoSchema = new Schema({
    nombre: String,
    precio: Number,
    departamento: String,
    descripcion: String,
    activo: Boolean
});

productoSchema.statics.activos = function (callback) {
    this.model('producto').find({ activo: true }, callback);
};

productoSchema.methods.mismoDepartamento = function (callback) {
    this.model('producto').find({ departamento: this.departamento }, callback);
}

module.exports = mongoose.model('producto', productoSchema);
