import { Imagen } from './models/imagen.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImagenesService {

  imagenes: Imagen[];

  constructor() {
    this.imagenes = [
      new Imagen('Abrazo', 'La izquierda unida, pero no el partido, si no los otros', 'https://static3.diariosur.es/www/multimedia/201911/13/media/cortadas/143992858--624x444.jpg'),
      new Imagen('Santi', 'La derechita canalla', 'https://s6.eestatic.com/2017/05/05/reportajes/entrevistas/VOX-Santiago_Abascal-Entrevistas_213740088_33819923_1024x768.jpg')
    ];
  }

  getActiveImages(): Promise<Imagen[]> {
    return new Promise<Imagen[]>((resolve, reject) => {
      const arrFiltrado = this.imagenes.filter(item => item.activa);
      resolve(arrFiltrado);
    });
  }

  getAdminImages(): Promise<Imagen[]> {
    return new Promise<Imagen[]>((resolve, reject) => {
      resolve(this.imagenes);
    });
  }

  agregarImagen(pImagen: Imagen): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      this.imagenes.push(pImagen);
      resolve('Se ha insertado la imagen');
    });
  }

}
