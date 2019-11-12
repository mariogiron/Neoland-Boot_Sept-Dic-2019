import { PremioService } from './../premio.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private premioService: PremioService) { }

  ngOnInit() {
  }

  handleClick() {
    this.premioService.getPremio()
      .then((res) => {
        console.log(res);
      })
  }

}
