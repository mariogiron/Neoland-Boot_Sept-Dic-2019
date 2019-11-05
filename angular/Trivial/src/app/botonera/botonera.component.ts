import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'botonera',
  templateUrl: './botonera.component.html',
  styleUrls: ['./botonera.component.css']
})
export class BotoneraComponent implements OnInit {

  @Input() respuestas: string[];

  @Output() respuestaSeleccionada: EventEmitter<number>;

  constructor() {
    this.respuestaSeleccionada = new EventEmitter();
  }

  ngOnInit() {
  }

  manejarClick(indice) {
    this.respuestaSeleccionada.emit(indice);
  }

}
