function spreadTest(param1, ...parametrosExtra) {
    console.log('PARAM1', param1);
    console.log('PARAMEXTRA', parametrosExtra);
}

function sumarNumeros(...pNums) {
    let res = 0;
    for (let num of pNums) {
        res += num;
    }
    return res;
}

function sumarNumerosRed(...pNums) {
    return pNums.reduce((prev, current) => prev + current, 0)
}

spreadTest('Hola', 'uno', 'dos', 'tres');
spreadTest('Adios');
console.log(sumarNumeros(3, 4, 5, 6, 7));
console.log(sumarNumeros(3, 5));

console.log(sumarNumerosRed(4, 5, 2));