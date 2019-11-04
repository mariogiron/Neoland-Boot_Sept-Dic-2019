import { Empleado } from './../models/empleado.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent implements OnInit {

  @Input() empleados: Empleado[];

  constructor() { }

  ngOnInit() {
  }

}
