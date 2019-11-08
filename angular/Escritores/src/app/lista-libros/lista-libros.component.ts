import { Libro } from './../models/libro.model';
import { LibrosService } from './../libros.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lista-libros',
  templateUrl: './lista-libros.component.html',
  styleUrls: ['./lista-libros.component.css']
})
export class ListaLibrosComponent implements OnInit {

  arrLibros: Libro[];

  constructor(
    private librosService: LibrosService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.parent.params.subscribe(params => {
      this.librosService.getByEscritorId(parseInt(params.idEscritor))
        .then((libros) => {
          this.arrLibros = libros;
        });
    });
  }

}
