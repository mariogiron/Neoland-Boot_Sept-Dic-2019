import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {

  @Input() cont: string;
  @Output() terminaContador: EventEmitter<string>;

  numero: number;
  interval: any;

  constructor() {
    this.numero = 10;
    this.terminaContador = new EventEmitter();
  }

  ngOnInit() {
  }

  comienzaContador() {
    this.numero = parseInt(this.cont);
    this.interval = setInterval(() => {
      this.numero--;
      if (this.numero === 0) {
        clearInterval(this.interval);
        this.terminaContador.emit(`El contador que empezaba en ${this.cont} ha terminado`);
      }
    }, 1000);
  }

  resetContador() {
    this.numero = 10;
    clearInterval(this.interval);
  }

}
