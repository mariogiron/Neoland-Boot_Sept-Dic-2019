function suma(pNum1, pNum2) {
    return pNum1 + pNum2;
}

var suma_v2 = (pNum1, pNum2) => {
    return pNum1 + pNum2;
}

var suma_retardo = (pNum1, pNum2, devuelveResultado) => {
    setTimeout(() => {
        devuelveResultado(pNum1 + pNum2);
    }, 3000);
}

suma_retardo(4, 5, (resultado) => {
    console.log('El resultado es ' + resultado);
});

console.log('FINALIZA');

// ÁMBITO

const nombre = 'Mario';

nombre = 'Rosita'; // FATAL!!

const persona = {
    nombre: 'Mario',
    apellidos: 'Giron'
}
persona.nombre = 'Rosita';

persona = {
    nombre: 'Eduardo',
    apellidos: 'Dato'
} // FATAL!!!

const numeros = [3, 5, 6, 8, 19];
numeros.push(45);

numeros = []; // FATAL!!!

const numero1 = 4;
const numero2 = 34;
suma(numero1, numero2);