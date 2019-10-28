class Profesor {
    constructor(pNombre, pApellidos, pExperiencia) {
        this.nombre = pNombre;
        this.apellidos = pApellidos;
        this.experiencia = pExperiencia;
    }
    mostrarProfesor() {
        return `PROFESOR (nombre: ${this.nombre}, apellidos: ${this.apellidos}, experiencia: ${this.experiencia})`;
    }
}

class Asignatura {
    constructor(pNombre, pProfesor) {
        this.nombre = pNombre;
        this.profesor = pProfesor;
    }
    mostrarAsignatura(muestraProfesor) {
        let resultado = `ASIGNATURA (nombre: ${this.nombre})`;
        if (muestraProfesor) {
            resultado += '\nAsignatura impartida por:'
            resultado += '\n' + this.profesor.mostrarProfesor();
        }
        return resultado;
    }
}

class Estudiante {
    constructor(pNombre, pApellidos) {
        this.nombre = pNombre;
        this.apellidos = pApellidos;
        this.asignaturas = [];
    }
    agregarAsignatura(asignatura) {
        this.asignaturas.push(asignatura);
    }
    mostrarEstudiante() {
        let resultado = `ESTUDIANTE (nombre: ${this.nombre}, apellidos: ${this.apellidos})
Estas son las asignaturas que cursa:`;
        for (let asignatura of this.asignaturas) {
            resultado += '\n' + asignatura.mostrarAsignatura(true);
        }
        return resultado;
    }
}

class Universidad {
    constructor(pNombre) {
        this.nombre = pNombre;
        this.alumnos = [];
    }
    agregarAlumno(estudiante) {
        this.alumnos.push(estudiante);
    }
    mostrarUniversidad() {
        let resultado = `UNIVERSIDAD(nombre: ${this.nombre})`;
        for (let alumno of this.alumnos) {
            resultado += '\n' + alumno.mostrarEstudiante();
        }
        return resultado;
    }
    obtenerAlumnosAsignatura(nombreAsignatura) {
        let cont = 0;
        for (let alumno of this.alumnos) {
            for (let asignatura of alumno.asignaturas) {
                if (asignatura.nombre === nombreAsignatura) cont++
            }
        }
        return cont;
    }
}

let profesor1 = new Profesor('Ramón', 'García', 5)
let profesor2 = new Profesor('Rosa', 'Martinez', 9)

let algebra = new Asignatura('Álgebra', profesor1)
let electronica = new Asignatura('Electrónica', profesor2)
let fisica = new Asignatura('Física', profesor2)

let estudiante1 = new Estudiante('Pepe', 'Ortiz')
let estudiante2 = new Estudiante('Ana', 'Jiménez')
let estudiante3 = new Estudiante('Lola', 'López')

estudiante1.agregarAsignatura(algebra)
estudiante1.agregarAsignatura(fisica)
estudiante2.agregarAsignatura(electronica)
estudiante3.agregarAsignatura(algebra)
estudiante3.agregarAsignatura(electronica)
estudiante3.agregarAsignatura(fisica)

let uni1 = new Universidad('UC3M')
uni1.agregarAlumno(estudiante1)
uni1.agregarAlumno(estudiante2)
uni1.agregarAlumno(estudiante3)

console.log(uni1.mostrarUniversidad());

console.log(estudiante1.asignaturas[0].profesor.nombre);
console.log(uni1.alumnos[1].asignaturas[0].profesor.experiencia);

console.log(uni1.obtenerAlumnosAsignatura('Electrónica'));

let fecha = new Date();
console.log(fecha);