import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  eventos: any[];

  constructor() {
    this.eventos = [];
  }

  manejarAviso($event) {
    this.eventos.push($event);
    console.log(this.eventos);
  }

}
