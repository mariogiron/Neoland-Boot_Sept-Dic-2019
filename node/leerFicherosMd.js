const fs = require('fs');

fs.readdir('./ficheros', (err, files) => {
    if (err) return console.log(err);
    let arrFiltrado = files.filter(item => item.endsWith('.md'));
    for (let fichero of arrFiltrado) {
        fs.readFile(`./ficheros/${fichero}`, 'UTF-8', (err, content) => {
            if (err) return console.log(err);
            console.log(content);
        })
    }
});

fs.readdir('./ficheros', (err, files) => {
    files.filter(item => item.endsWith('.md')).forEach(item => {
        console.log(fs.readFileSync(`./ficheros/${item}`, 'UTF-8'));
    })
});