import { Component } from '@angular/core';
import { Empleado } from './models/empleado.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  arrEmpleados: Empleado[];

  constructor() {
    this.arrEmpleados = [];
  }

  manejarRegistrarEmpleado($event) {
    this.arrEmpleados.push({ ...$event });
  }

}
