import { Escritor } from './../models/escritor.model';
import { EscritoresService } from './../escritores.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-escritores',
  templateUrl: './lista-escritores.component.html',
  styleUrls: ['./lista-escritores.component.css']
})
export class ListaEscritoresComponent implements OnInit {

  arrEscritores: Escritor[];

  constructor(private escritoresService: EscritoresService) { }

  async ngOnInit() {
    // Recuperar los datos de los escritores sin PROMESAS
    // this.arrEscritores = this.escritoresService.getAll();

    // Recuperar los datos de los escritores con una PROMESA
    // this.escritoresService.getAllP().then((escritores) => {
    //   this.arrEscritores = escritores;
    // });

    // Recuperar los datos con async-await
    this.arrEscritores = await this.escritoresService.getAllP();
  }

}
