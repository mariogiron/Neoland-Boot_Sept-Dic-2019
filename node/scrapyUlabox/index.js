const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

const url = "https://www.ulabox.com/categoria/panaderia-y-bolleria/1527";
let arrProductos = [];

(async () => {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    const pagination = $('.pagination').first();
    const numPages = parseInt(pagination.children().last().prev().text());
    for (let i = 1; i <= numPages; i++) {
        await getProductsPage(url, i);
    }
    console.log(arrProductos.length);
})();

async function getProductsPage(pUrl, pPage) {
    const response = await axios.get(`${pUrl}?p=${pPage}`);
    const $ = cheerio.load(response.data);
    const productos = $('.product-item');

    for (let i = 0; i < productos.length; i++) {
        let p = {};
        p.nombre = productos[i].attribs['data-product-name'];
        p.precio = productos[i].attribs['data-price'];
        p.marca = productos[i].attribs['data-product-brand'];

        const id = productos[i].attribs.id;
        const img = $(`#${id} .product-item__image img`);
        p.image = img[0].attribs['data-src'];
        saveImage(p.image, id);

        arrProductos.push(p);
    }

}

function saveImage(pUrl, pProductId) {
    axios({
        method: 'get',
        url: pUrl,
        responseType: 'arraybuffer'
    }).then(response => {
        fs.appendFile(`./imagenes/${pProductId}.jpg`, response.data, (err) => {
            if (err) console.log(err);
        });
    })
}
