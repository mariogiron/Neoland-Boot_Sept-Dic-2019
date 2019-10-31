export class Tarea {
    mensaje: string;
    prioridad: string;
    completa: boolean;

    constructor(pMensaje = '', pPrioridad = '') {
        this.mensaje = pMensaje;
        this.prioridad = pPrioridad;
        this.completa = false;
    }

}