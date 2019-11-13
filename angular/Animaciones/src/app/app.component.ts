import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('cambioColor', [
      state('verde', style({
        'background-color': 'green',
        transform: 'translateX(200px)'
      })),
      state('rojo', style({
        'background-color': 'red',
        transform: 'scale(2)'
      })),
      state('ambar', style({
        'background-color': 'yellow'
      })),
      transition('verde => ambar', animate('.5s')),
      transition('ambar => rojo', animate('2.5s')),
      transition('rojo => verde', animate('1s')),
      transition('void => *', [
        style({
          transform: 'translateX(-100%)'
        }),
        animate(1000)
      ])
    ])
  ]
})
export class AppComponent implements OnInit {

  estadoAnimacion: string;

  constructor() {
    this.estadoAnimacion = 'verde';
  }

  ngOnInit() {
    setInterval(() => {
      if (this.estadoAnimacion === 'verde') {
        this.estadoAnimacion = 'ambar';
      } else if (this.estadoAnimacion === 'ambar') {
        this.estadoAnimacion = 'rojo';
      } else if (this.estadoAnimacion === 'rojo') {
        this.estadoAnimacion = 'verde';
      }
    }, 3000);
  }

}
