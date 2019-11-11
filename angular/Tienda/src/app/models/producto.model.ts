export class Producto {

    id: number;
    name: string;
    description: string;
    image: string;
    price: string;
    categoria: string;

    constructor(pId, pName, pDescription, pImage, pPrice, pCategoria) {
        this.id = pId;
        this.name = pName;
        this.description = pDescription;
        this.price = pPrice;
        this.categoria = pCategoria;
    }

}