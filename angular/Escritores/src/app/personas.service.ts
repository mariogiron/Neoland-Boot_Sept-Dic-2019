import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  arrPersonas: any[];

  constructor() {
    if (localStorage.getItem('personas')) {
      this.arrPersonas = JSON.parse(localStorage.getItem('personas'));
    } else {
      this.arrPersonas = [
        { id: 1, nombre: 'Mario', apellidos: 'Girón', edad: 35 },
        { id: 2, nombre: 'Rosa', apellidos: 'López', edad: 46 },
        { id: 3, nombre: 'Fermín', apellidos: 'Cacho', edad: 25 },
        { id: 4, nombre: 'Nuria', apellidos: 'Bernudez', edad: 57 },
        { id: 5, nombre: 'Luis', apellidos: 'Roldán', edad: 42 },
      ];
    }
  }

  // Método que recupera todas las personas
  getAll() {
    return this.arrPersonas;
  }

  // Método para recuperar las personas mayores de pEdad
  mayoresDe(pEdad) {
    // return this.arrPersonas.filter((pers) => {
    //   return pers.edad > pEdad;
    // });
    // return this.arrPersonas.filter(pers => pers.edad > pEdad);
    const resultado = [];
    for (const pers of this.arrPersonas) {
      if (pers.edad > pEdad) {
        resultado.push(pers);
      }
    }
    return resultado;
  }

  getById(pId) {
    return this.arrPersonas.find((pers) => {
      return pers.id === pId;
    });
  }

  insert(pPersona) {
    this.arrPersonas.push(pPersona);
    localStorage.setItem('personas', JSON.stringify(this.arrPersonas));
  }

}
