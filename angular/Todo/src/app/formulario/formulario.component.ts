import { Tarea } from './../models/tarea.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @Output() tareaRegistrada: EventEmitter<Tarea>;

  nuevaTarea: Tarea;

  constructor() {
    this.tareaRegistrada = new EventEmitter();
    this.nuevaTarea = new Tarea('', '');
  }

  ngOnInit() {
  }

  enviarTarea() {

    this.tareaRegistrada.emit(this.nuevaTarea);
  }

}
