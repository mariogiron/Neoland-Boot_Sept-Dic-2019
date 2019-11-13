import { Component } from '@angular/core';
import { trigger, state, style } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('cambioColor', [
      state('verde', style({
        'background-color': 'green'
      }))
    ])
  ]
})
export class AppComponent {

}
