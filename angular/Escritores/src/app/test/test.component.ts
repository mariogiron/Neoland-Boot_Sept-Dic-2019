import { PersonasService } from './../personas.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  arr: any[];
  formPersona: FormGroup;

  constructor(private personasService: PersonasService) {
    this.formPersona = new FormGroup({
      id: new FormControl(''),
      nombre: new FormControl(''),
      apellidos: new FormControl(''),
      edad: new FormControl('')
    });
  }

  ngOnInit() {
    this.arr = this.personasService.getAll();
  }

  manejarClick() {
    this.arr = this.personasService.mayoresDe(30);
  }

  mostrarPersona(pId) {
    const p = this.personasService.getById(pId);
    alert(`${p.nombre} ${p.apellidos}`);
  }

  onSubmit() {
    this.personasService.insert(this.formPersona.value);
  }

}
