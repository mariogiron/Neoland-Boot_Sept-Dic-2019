import { UsuariosService } from './../../usuarios.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private usuariosService: UsuariosService) { }

  ngOnInit() {
  }

  onSubmit(value) {
    this.usuariosService.login(value)
      .then(response => {
        if (response['error']) {
          alert(response['error']);
        } else {
          localStorage.setItem('user-token', response['exito']);
          // TODO : Hacer aquí algo
        }
      }).catch(err => {
        console.log(err);
      });
  }

}
