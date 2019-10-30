import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  tarea: any;
  arrTareas: any[];

  constructor() {
    this.tarea = {};
    this.arrTareas = [];
  }

  ngOnInit() {
  }

  enviarTarea() {
    // const objCopia = {
    //   mensaje: this.tarea.mensaje,
    //   prioridad: this.tarea.prioridad
    // };
    this.arrTareas.push({ ...this.tarea });
    console.log(this.arrTareas);
    // this.tarea = {};
  }

  mostrarLista() {
    let resultado = '<ul>';
    for (const t of this.arrTareas) {
      resultado += `<li>Mensaje: ${t.mensaje}. Prioridad: ${t.prioridad}</li>`;
    }
    resultado += '</ul>';
    return resultado;
  }

}
