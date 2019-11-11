import { SwService } from './sw.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private swService: SwService) { }

  // handleClick() {
  //   this.swService.getRandomNum(19, 8).then(res => {
  //     if (res['error']) {
  //       alert(res['error']);
  //     } else {
  //       console.log(res['success']);
  //     }
  //   });
  // }

  async handleClick() {
    const res = await this.swService.getRandomNum(23, 3);
    if (res['error']) {
      alert(res['error']);
    } else {
      console.log(res['success']);
    }
  }

}
