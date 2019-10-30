import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {

  // Definimos las propiedades de la clase
  mensaje: string;
  identificador: string;

  constructor() {
    // Inicializamos las propiedades
    this.mensaje = 'Mensaje de prueba';
    this.identificador = 'identifParrafo';
    setTimeout(() => {
      this.mensaje = 'OTRO VALOR';
    }, 3000);
  }

  ngOnInit() {
  }

  devolverNuevoMensaje(): string {
    return 'Mensaje desde función';
  }

  botonPulsado($event) {
    console.log('Se ha pulsado el botón');
    console.log($event.screenX);
  }

}
