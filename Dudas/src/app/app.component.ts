import { Component } from '@angular/core';
import { PruebaService } from './prueba.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  valorCampo: string;
  valorCampo2: string;

  constructor(private pruebaService: PruebaService) {

  }

  ngOnInit() {
    this.pruebaService.getUsers().then((response) => {
      console.log(response);
    });

    let field = document.getElementById('field1');

    field.addEventListener('input', function (event) {
      console.log(this);
      this.valorCampo = event.target['value'];
    }.bind(this));
  }

}
