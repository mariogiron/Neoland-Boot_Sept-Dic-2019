import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {

  mensaje: string;

  // 1 - Inyecto activatedRoute
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // 2 - Suscribimos a la propiedad PARAMS del objeto ActivatedRoute
    // params es un objeto Observable
    this.activatedRoute.params.subscribe((params) => {
      this.mensaje = params.saludo;
    });
  }

}
