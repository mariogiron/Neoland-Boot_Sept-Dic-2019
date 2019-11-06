import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {

  formulario: FormGroup;

  constructor() {
    this.formulario = new FormGroup({
      nombre: new FormControl(''),
      apellidos: new FormControl(''),
      edad: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      repite_password: new FormControl(''),
      privacidad: new FormControl('')
    });
  }

  ngOnInit() {
  }

  onSubmit() {

  }

}
