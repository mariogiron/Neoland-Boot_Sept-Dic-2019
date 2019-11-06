import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  arrPersonas: any[];

  constructor() {
    this.arrPersonas = [
      { id: 1, nombre: 'Mario', apellidos: 'Girón', edad: 35 },
      { id: 2, nombre: 'Rosa', apellidos: 'López', edad: 46 },
      { id: 3, nombre: 'Fermín', apellidos: 'Cacho', edad: 25 },
      { id: 4, nombre: 'Nuria', apellidos: 'Bernudez', edad: 57 },
      { id: 5, nombre: 'Luis', apellidos: 'Roldán', edad: 42 },
    ];
  }

  getAll() {
    return this.arrPersonas;
  }

}
