class Persona {
    constructor(pNombre, pApellidos, pEdad) {
        this.nombre = pNombre;
        this.apellidos = pApellidos;
        this.edad = pEdad;
    }
    mostrar() {
        return `PERSONA: Nombre ${this.nombre}. Apellidos ${this.apellidos}. Edad ${this.edad}.\n`;
    }
}

class Vivienda {
    constructor(pPiso, pLetra) {
        this.piso = pPiso;
        this.letra = pLetra;
        this.habitantes = [];
    }

    agregarHabitante(pPersona) {
        this.habitantes.push(pPersona);
    }

    mostrar() {
        let resultado = `VIVIENDA. Piso ${this.piso}. Letra ${this.letra}\n`;
        for (let habitante of this.habitantes) {
            resultado += habitante.mostrar();
        }
        return resultado;
    }
}

class Edificio {
    constructor(pCalle, pNumero) {
        this.calle = pCalle;
        this.numero = pNumero;
        this.casas = [];
    }
    agregarCasa(pCasa) {
        this.casas.push(pCasa);
    }
    mostrar() {
        let resultado = `EDIFICIO. Calle ${this.calle}. Número ${this.numero}\n`;
        for (let casa of this.casas) {
            resultado += casa.mostrar();
        }
        return resultado;
    }
}

let pers1 = new Persona('Roberto', 'Rodríguez', 33);
let pers2 = new Persona('Ana', 'López', 23);
let pers3 = new Persona('Alvaro', 'Martín', 56);

let viv1 = new Vivienda(3, 'D');
viv1.agregarHabitante(pers1);
viv1.agregarHabitante(pers2);

let viv2 = new Vivienda(2, 'I');
viv2.agregarHabitante(pers3);

let edif = new Edificio('Gran Vía', 23);
edif.agregarCasa(viv1);
edif.agregarCasa(viv2);

console.log(edif.mostrar());