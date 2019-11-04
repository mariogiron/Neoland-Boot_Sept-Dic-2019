import { Producto } from './../models/producto.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comanda',
  templateUrl: './comanda.component.html',
  styleUrls: ['./comanda.component.css']
})
export class ComandaComponent implements OnInit {

  @Input() productos: any[];

  constructor() { }

  ngOnInit() {
  }

  calcularTotal() {
    let total = 0;
    for (const item of this.productos) {
      total += item.producto.precio * item.cantidad;
    }
    return total;
  }

}
