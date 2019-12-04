const axios = require('axios');
const parser = require('fast-xml-parser');
const terminalImage = require('terminal-image');
const got = require('got');

module.exports = () => {
    return new Promise((resolve, reject) => {
        axios.get('https://datos.madrid.es/egob/catalogo/202088-0-trafico-camaras.kml')
            .then(async response => {
                const objJson = parser.parse(response.data);
                const placemark = objJson.kml.Document.Placemark;
                const randomNum = Math.floor(Math.random() * (placemark.length - 1));
                const infoCamera = placemark[randomNum].ExtendedData.Data;
                console.log(infoCamera);
                const urlImagen = `http://informo.munimadrid.es/cameras/Camara${(infoCamera[0].Value).toString().padStart(5, '0')}.jpg`;
                console.log(urlImagen);

                const body = await axios({
                    method: 'get',
                    url: urlImagen,
                    responseType: 'arraybuffer'
                })
                console.log(await terminalImage.buffer(body.data));
                resolve();
            });
    });
}