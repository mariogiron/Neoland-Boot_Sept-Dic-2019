import { AlumnosService } from './../../alumnos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  arrAlumnos: any[];

  constructor(private alumnosService: AlumnosService) { }

  ngOnInit() {
    this.alumnosService.getAll()
      .then(response => {
        console.log(response);
        this.arrAlumnos = response;
      });
  }

}
