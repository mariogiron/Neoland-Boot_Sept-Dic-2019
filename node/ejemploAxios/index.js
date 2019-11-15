const axios = require('axios');
const exec = require('child_process').exec;

const printArr = (arr) => {
    console.log(arr);
}

axios.get('https://swapi.co/api/planets/?format=json')
    .then((response) => {
        let arrNames = response.data.results.map(item => item.name);
        return arrNames;
    }).then(printArr).catch((err) => {
        console.log(err);
    });

(async () => {
    const response = await axios.get('http://www.google.es');
    console.log(response);
})();

console.log(__filename);