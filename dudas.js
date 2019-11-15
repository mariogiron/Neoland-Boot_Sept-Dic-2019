let nuevoObj = null;

let numero = 0;
try {
    numero = 4;
    nuevoObj.toUpperCase();
} catch (error) {
    console.log(error.message);
} finally {
    console.log('Se ejecuta siempre')
}

console.log('Hola Mundo');
console.log(numero);

