import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'reloj',
  templateUrl: './reloj.component.html',
  styleUrls: ['./reloj.component.css']
})
export class RelojComponent implements OnInit {

  @Input() segundos: string;
  @Input() identificador: string;

  @Output() avisoSegundos: EventEmitter<any>;

  segundosTotales: number;
  alarma: boolean;

  constructor() {
    this.avisoSegundos = new EventEmitter();
  }

  ngOnInit() {
    this.segundosTotales = parseInt(this.segundos);
    this.alarma = false;
    const interval = setInterval(() => {
      this.segundosTotales--;
      if (this.segundosTotales === 30) {
        this.alarma = true;
        this.avisoSegundos.emit({
          identificador: this.identificador,
          tiempo: 30
        });
      }
      if (this.segundosTotales === 0) {
        clearInterval(interval);
        this.avisoSegundos.emit({
          identificador: this.identificador,
          tiempo: 0
        });
      }
    }, 1000);
  }

  mostrarHora() {
    const horas = Math.floor(this.segundosTotales / (60 * 60));
    const minutos = Math.floor((this.segundosTotales % (60 * 60)) / 60);
    const segundos = this.segundosTotales % 60;
    return `${String(horas).padStart(2, '0')}:${minutos < 10 ? '0' + minutos : minutos}.${segundos < 10 ? '0' + segundos : segundos}`;
  }

}