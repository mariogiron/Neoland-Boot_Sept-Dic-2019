import { AlumnosService } from './../../alumnos.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formulario: FormGroup;

  constructor(private alumnosService: AlumnosService) {
    this.formulario = new FormGroup({
      nombre: new FormControl(''),
      apellidos: new FormControl(''),
      edad: new FormControl(''),
      email: new FormControl(''),
      notamedia: new FormControl(''),
      matricula: new FormControl(''),
      discapacidad: new FormControl(''),
      sexo: new FormControl('')
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.formulario.value);
    this.alumnosService.insert(this.formulario.value)
      .then(response => {
        console.log(response);
      });
  }

}
