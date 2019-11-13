import { ImagenesService } from './../imagenes.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  form: FormGroup;

  constructor(private imagenesService: ImagenesService) {
    this.form = new FormGroup({
      titulo: new FormControl(''),
      descripcion: new FormControl(''),
      url: new FormControl(''),
      activa: new FormControl('')
    })
  }

  ngOnInit() {
  }

  async onSubmit() {
    const msg = await this.imagenesService.agregarImagen(this.form.value);
    console.log(msg);
  }

}
