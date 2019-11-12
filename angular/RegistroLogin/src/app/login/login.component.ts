import { PremioService } from './../premio.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private premioService: PremioService) { }

  ngOnInit() {
  }

  onSubmit(values) {
    console.log(values);
    this.premioService.loginUsuario(values.username, values.password).then((res) => {
      console.log(res);
    });
  }

}
