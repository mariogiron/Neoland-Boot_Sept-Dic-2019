const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

let arrCosas = [];

rl.question('¿Cómo te llamas? ', (answer) => {
    rl.setPrompt('Dime una cosa... ');
    rl.prompt();

    rl.on('line', (input) => {
        if (input === 'exit') {
            rl.close();
        } else {
            arrCosas.push(input);
            rl.prompt();
        }
    })
})

rl.on('close', () => {
    console.log(arrCosas);
});