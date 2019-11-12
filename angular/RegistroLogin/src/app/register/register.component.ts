import { PremioService } from './../premio.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formulario: FormGroup;

  constructor(private premioService: PremioService) {
    this.formulario = new FormGroup({
      name: new FormControl(''),
      surname: new FormControl(''),
      username: new FormControl(''),
      password: new FormControl(''),
      mail: new FormControl(''),
      address: new FormControl(''),
      age: new FormControl('')
    });
  }

  ngOnInit() {
  }

  envioFormularioRegistro() {
    console.log(this.formulario.value);
    this.premioService.registroUsuario(this.formulario.value).then((res) => {
      console.log(res);
    });
  }

}
