import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-suma',
  templateUrl: './suma.component.html',
  styleUrls: ['./suma.component.css']
})
export class SumaComponent implements OnInit {

  @Input() num1: string;
  @Input() num2: string;
  resultado: number;

  constructor() {
    this.num1 = '9';
    this.num2 = '32';
    this.resultado = 0;
  }

  ngOnInit() {
  }

  calculaResultado() {
    // tslint:disable-next-line: radix
    this.resultado = parseInt(this.num1) + parseInt(this.num2);
  }

}
