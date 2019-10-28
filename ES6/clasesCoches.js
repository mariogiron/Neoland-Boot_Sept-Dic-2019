class Coche {

    constructor(pColor, pMarca, pModelo) {
        this.color = pColor;
        this._marca = pMarca;
        this._modelo = pModelo;
        this.velocidad = 0;
    }

    get marca() {
        return this._marca.toUpperCase();
    }

    set marca(newValue) {
        this._marca = newValue;
    }

    mostrar() {
        return `Color: ${this.color}. Marca: ${this.marca}. Modelo: ${this.modelo}. Velocidad: ${this.velocidad}`;
    }

    acelerar(pVelocidad) {
        this.velocidad += pVelocidad;
    }

    frenar(pVelocidad) {
        this.velocidad -= pVelocidad;
    }

}

let coche1 = new Coche('rojo', 'Mercedes', 'X180');
let coche2 = new Coche('verde', 'Seat', 'Altea');

coche1.acelerar(70);
coche1.acelerar(20);
console.log(coche1.mostrar());
coche1.frenar(50);
console.log(coche1.mostrar());

console.log(coche2.marca); // Get de la prop
coche2.modelo = 'Cordoba'; // Set de la prop