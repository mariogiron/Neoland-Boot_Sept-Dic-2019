import { Empleado } from './../models/empleado.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @Output() registrarEmpleado: EventEmitter<Empleado>;

  nuevoEmpleado: Empleado;

  constructor() {
    this.nuevoEmpleado = new Empleado();
    this.registrarEmpleado = new EventEmitter();
  }

  ngOnInit() {
  }

  manejarClick() {
    this.registrarEmpleado.emit(this.nuevoEmpleado);
  }

}
