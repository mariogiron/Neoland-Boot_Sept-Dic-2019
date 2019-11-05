import { Component, OnInit } from '@angular/core';
import { Pregunta } from '../models/pregunta.model';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  preguntas: Pregunta[];
  preguntaActiva: number;
  preguntasAcertadas: number;

  constructor() {
    this.preguntaActiva = 0;
    this.preguntasAcertadas = 0;
    this.preguntas = [
      new Pregunta('¿Cuál es el color más bonico?', ['rojo', 'verde', 'amarillo', 'añil'], 2),
      new Pregunta('¿Mejor lenguaje programación?', ['Java', 'PHP', 'Python', 'Javascript'], 1),
      new Pregunta('Capital de España', ['Toledo', 'Cuenca', 'Lisboa', 'Madrid'], 3),
      new Pregunta('Cual no es un planeta', ['Plutón', 'Marte', 'Tierra', 'Dagobah'], 0)
    ];
  }

  ngOnInit() {
  }

  manejarRespuestaSeleccionada($event) {
    if ($event === this.preguntas[this.preguntaActiva].respuestaCorrecta) {
      alert('Respuesta correcta');
      this.preguntasAcertadas++;
    } else {
      alert('Respuesta erronea');
    }
    this.preguntaActiva++;
    if (this.preguntaActiva === this.preguntas.length) {
      alert('Se terminó');
    }
  }

}
