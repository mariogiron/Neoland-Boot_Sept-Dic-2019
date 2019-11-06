import { PersonasService } from './../personas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  arr: any[];

  constructor(private personasService: PersonasService) { }

  ngOnInit() {
    this.arr = this.personasService.getAll();
  }

}
