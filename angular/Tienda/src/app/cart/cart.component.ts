import { Producto } from './../models/producto.model';
import { ProductosService } from './../productos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  arrProductos: Producto[];

  constructor(private productosService: ProductosService) { }

  ngOnInit() {
    const token = localStorage.getItem('tokenCarrito');
    this.productosService.getCart(token)
      .then((res) => {
        this.arrProductos = res;
      });
  }

}
