const readline = require('readline');
const fs = require('fs');
const rl = readline.createInterface(process.stdin, process.stdout);

let arrCosas = [];

rl.question('¿Cómo te llamas? ', (answer) => {
    //fs.appendFileSync(`./${answer}.md`, '## Cabecera');
    const streamW = fs.createWriteStream(`./${answer}.md`, 'UTF-8');
    streamW.write('## Cabecera STREAM');

    rl.setPrompt('Dime una cosa... ');
    rl.prompt();

    // Evento que se lanza cuando recibo una linea por teclado
    rl.on('line', (input) => {
        if (input === 'exit') {
            rl.close();
            streamW.close();
        } else {
            arrCosas.push(input);
            //fs.appendFileSync(`./${answer}.md`, '\n' + input);
            streamW.write('\n' + input);
            rl.prompt();
        }
    })
})

rl.on('close', () => {
    console.log(arrCosas);
});