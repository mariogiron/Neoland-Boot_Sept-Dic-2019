const JustWatch = require('justwatch-api');

let jw = new JustWatch({
    locale: 'es_ES'
});

// jw.getProviders()
//     .then(response => {
//         response.forEach(item => console.log(item));
//     }).catch(err => {
//         console.log(err);
//     })

jw.request('GET', 'providers').then(response => console.log(response));