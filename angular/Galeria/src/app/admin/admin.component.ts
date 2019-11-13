import { Imagen } from './../models/imagen.model';
import { ImagenesService } from './../imagenes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  arrImagenes: Imagen[];
  imagenAEditar: Imagen;

  constructor(private imagenesService: ImagenesService) { }

  async ngOnInit() {
    this.imagenAEditar = null;
    this.arrImagenes = await this.imagenesService.getAdminImages();
  }

  manejarActDes(imagen) {
    imagen.activa = !imagen.activa;
  }

  manejarEliminar(i) {
    this.arrImagenes.splice(i, 1);
  }

  manejarEditar(imagen) {
    this.imagenAEditar = imagen;
  }

}
