import { Libro } from './models/libro.model';
import { LIBROS } from './db/libros.db';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  constructor() { }

  getByEscritorId(idEscritor): Promise<Libro[]> {
    return new Promise<Libro[]>((resolve, reject) => {
      const librosFiltrados = LIBROS.filter(item => {
        return item.escritor === idEscritor;
      });
      resolve(librosFiltrados);
    });
  }

}
