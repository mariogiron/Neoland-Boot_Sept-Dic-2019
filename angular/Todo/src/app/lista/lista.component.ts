import { Tarea } from './../models/tarea.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  @Input() tareas: Tarea[];

  constructor() { }

  ngOnInit() {
  }

  completarTarea(tarea) {
    tarea.completa = !tarea.completa;
  }

}
