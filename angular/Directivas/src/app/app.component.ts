import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  estiloParrafo: any;
  departamento: string;

  constructor() {
    this.departamento = 'informática';
    this.estiloParrafo = {
      color: 'white',
      backgroundColor: 'indigo',
      fontSize: '24px'
    };
    setTimeout(() => this.estiloParrafo.color = 'tomato', 3000);
  }

  cambioFuente($event) {
    this.estiloParrafo.fontSize = $event.target.value + 'px';
  }

}
