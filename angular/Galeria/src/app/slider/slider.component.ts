import { Imagen } from './../models/imagen.model';
import { ImagenesService } from './../imagenes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  arrImagenes: Imagen[];

  constructor(private imagenesService: ImagenesService) { }

  async ngOnInit() {
    try {
      this.arrImagenes = await this.imagenesService.getActiveImages();
    } catch (err) {
      console.log(err);
    }
  }

}
