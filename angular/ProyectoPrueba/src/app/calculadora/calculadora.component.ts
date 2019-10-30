import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  resultado: string;

  constructor() {
    this.resultado = '';
  }

  ngOnInit() {
  }

  pulsarBoton(elem) {
    this.resultado += elem;
  }

  resolver() {
    this.resultado = String(eval(this.resultado))
  }

}
