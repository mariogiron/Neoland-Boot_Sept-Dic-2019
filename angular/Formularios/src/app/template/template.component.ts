import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  @ViewChild('parrafoPpal', { static: false }) parrafo: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(formValue) {
    console.log(formValue);
    this.parrafo.nativeElement.style.backgroundColor = 'red';
  }

}
