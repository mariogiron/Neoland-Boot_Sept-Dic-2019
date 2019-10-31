import { Episodio } from './../models/episodio.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-episodios',
  templateUrl: './episodios.component.html',
  styleUrls: ['./episodios.component.css']
})
export class EpisodiosComponent implements OnInit {

  episodios: Episodio[];

  constructor() {
    // this.episodios = [
    //   { title: 'Winter Is Coming', director: 'Tim Van Patten' },
    //   { title: 'The Kingsroad', director: 'Tim Van Patten' },
    //   { title: 'Lord Snow', director: 'Brian Kirk' },
    //   { title: 'Cripples, Bastards, and Broken Things', director: 'Brian Kirk' },
    //   { title: 'The Wolf and the Lion', director: 'Brian Kirk' },
    //   { title: 'A Golden Crown', director: 'Daniel Minahan' },
    //   { title: 'You Win or You Die', director: 'Daniel Minahan' },
    //   { title: 'The Pointy End', director: 'Daniel Minahan' }
    // ];
    this.episodios = [
      new Episodio('Winter is Coming', 'Tim Van Patten'),
      new Episodio('The Kingsroad', 'Tim Van Patten'),
      new Episodio('Lord Snow', 'Brian Kirk'),
      new Episodio('Cripples, Bastards, and Broken Things', 'Brian Kirk'),
      new Episodio('You Win or You Die', 'Daniel Minahan'),
      new Episodio('The Pointy End', 'Daniel Minahan'),
    ];
  }

  ngOnInit() {
  }

}
