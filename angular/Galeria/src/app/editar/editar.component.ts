import { FormGroup, FormControl } from '@angular/forms';
import { Imagen } from './../models/imagen.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  @Input() img: Imagen;

  form: FormGroup;

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      titulo: new FormControl(this.img.titulo),
      descripcion: new FormControl(this.img.descripcion),
      url: new FormControl(this.img.url),
      activa: new FormControl(this.img.activa)
    });
  }

  onSubmit() {
    console.log(this.form.value);
    this.img = this.form.value;
  }

}
