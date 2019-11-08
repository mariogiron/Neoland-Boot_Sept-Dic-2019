import { SwService } from './../sw.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-planetas',
  templateUrl: './lista-planetas.component.html',
  styleUrls: ['./lista-planetas.component.css']
})
export class ListaPlanetasComponent implements OnInit {

  planetas: any[];
  numPaginas: number;
  paginaActual: number;

  constructor(private swService: SwService) {
    this.paginaActual = 1;
  }

  ngOnInit() {
    this.recuperarPlanetas();
  }

  cambiaPagina(cambio) {
    // this.paginaActual += cambio;
    if (cambio < 0) {
      this.paginaActual--;
    } else {
      this.paginaActual++;
    }
    this.recuperarPlanetas();
  }

  recuperarPlanetas() {
    this.swService.getPlanets(this.paginaActual)
      .then((res) => {
        this.planetas = res['results'];
        this.numPaginas = Math.ceil(res['count'] / 10);
        console.log(this.numPaginas);
      });
  }

}
