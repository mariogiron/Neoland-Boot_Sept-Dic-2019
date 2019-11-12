import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  precio: number;
  numero: number;
  fechaActual: Date;
  cadena: string;
  randomNum: number;

  devuelveMensaje: Promise<string>;

  inicioSlice: number;
  finSlice: number;

  constructor() {
    this.precio = 1245.35;
    this.numero = 14289.443292;
    this.fechaActual = new Date();
    this.cadena = 'Solo quedan 2 díAs de Angular';
    this.randomNum = Math.random();
    this.inicioSlice = 1;
    this.finSlice = 2;
    this.devuelveMensaje = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Mensaje que envío desde la promesa');
      }, 5000);
    });
  }

  cambiarFin() {
    this.finSlice++;
  }

}
