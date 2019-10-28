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

class Persona {

    constructor(pNombre, pApellidos, pEdad) {
        this.nombre = pNombre;
        this.apellidos = pApellidos;
        this.edad = pEdad;
    }

    mostrar() {
        return `Me llamo ${this.nombre} ${this.apellidos} y tengo ${this.edad} años`;
    }

}

class Adulto extends Persona {

    constructor(pNombre, pApellidos, pEdad, pCoche) {
        super(pNombre, pApellidos, pEdad);
        this.coche = pCoche;
    }

}

class Nino extends Persona {
    constructor(pNombre, pApellidos, pEdad, pColegio) {
        super(pNombre, pApellidos, pEdad);
        this.colegio = pColegio;
    }
}

let coche = new Coche('amarillo', 'Kia', 'Sportage');

let adul1 = new Adulto('Lorenzo', 'Martín', 35, coche);
console.log(adul1.mostrar());

adul1.coche.acelerar(30);
console.log(adul1.coche.mostrar());