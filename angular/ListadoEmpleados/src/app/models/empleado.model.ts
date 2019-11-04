export class Empleado {

    nombre: string;
    apellidos: string;
    dni: string;
    departamento: string;
    email: string;
    imagen: string;

    constructor(pNombre: string = '', pApellidos: string = '', pDni: string = '', pDepartamento: string = '', pEmail: string = '', pImagen: string = '') {
        this.nombre = pNombre;
        this.apellidos = pApellidos;
        this.dni = pDni;
        this.departamento = pDepartamento;
        this.email = pEmail;
        this.imagen = pImagen;
    }

}
