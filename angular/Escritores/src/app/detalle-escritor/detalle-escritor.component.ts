import { Escritor } from './../models/escritor.model';
import { EscritoresService } from './../escritores.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-escritor',
  templateUrl: './detalle-escritor.component.html',
  styleUrls: ['./detalle-escritor.component.css']
})
export class DetalleEscritorComponent implements OnInit {

  esc: Escritor;

  constructor(
    private activatedRoute: ActivatedRoute,
    private escritoresService: EscritoresService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      console.log(params.idEscritor);
      this.escritoresService.getById(parseInt(params.idEscritor))
        .then((escritor) => {
          this.esc = escritor;
        }).catch((mensaje) => {
          console.log(mensaje);
        });
    });
  }

}
