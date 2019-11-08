import { Escritor } from './models/escritor.model';
import { Injectable } from '@angular/core';
import { ESCRITORES } from './db/escritores.db';

@Injectable({
  providedIn: 'root'
})
export class EscritoresService {

  constructor() { }

  getAll(): Escritor[] {
    return ESCRITORES;
  }

  getAllP(): Promise<Escritor[]> {
    return new Promise<Escritor[]>((resolve, reject) => {
      setTimeout(() => {
        resolve(ESCRITORES);
      }, 3000);
    });
  }

  getById(pId: number): Promise<Escritor> {
    return new Promise<Escritor>((resolve, reject) => {
      const escritorEncontrado = ESCRITORES.find(item => item.id === pId);
      if (escritorEncontrado) {
        resolve(escritorEncontrado);
      } else {
        reject('El id no corresponde con ningún escritor');
      }
    });
  }

}
