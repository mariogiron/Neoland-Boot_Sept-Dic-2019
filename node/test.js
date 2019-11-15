function sumar(num1, num2, callback) {
    setTimeout(() => {
        callback(num1 + num2, 'saludo a los sumadores');
    }, 2000);
}

let res = sumar(4, 5, (resultado, mensaje) => {

});

fs.readFile('fichero.txt', 'UTF-8', (err, content) => {

})