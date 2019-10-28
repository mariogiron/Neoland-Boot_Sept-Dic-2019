let prom = new Promise((resolve, reject) => {
    setTimeout(() => {
        let randomNum = Math.random();
        if (randomNum > 0.9) {
            reject(randomNum);
        } else {
            resolve(randomNum);
        }
    }, 3000);
});

let prom2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Resuelta correctamente');
    }, 5000);
})

// prom.then((pNum) => {
//     console.log('La promesa termina correctamente ' + pNum);
// }).catch((pNum) => {
//     console.log('La promesa termina con error' + pNum);
// });

let promises = [prom, prom2];

Promise.all(promises).then((results) => {
    console.log(results);
}).catch((errores) => {
    console.log(errores);
});

console.log('Otras cosas...');
