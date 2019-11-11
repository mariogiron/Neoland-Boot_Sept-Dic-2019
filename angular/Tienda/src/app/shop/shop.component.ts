import { Producto } from './../models/producto.model';
import { ProductosService } from './../productos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  arrProductos: Producto[];

  constructor(private productosService: ProductosService) { }

  ngOnInit() {
    this.productosService.getAll()
      .then((res) => {
        this.arrProductos = res;
      });
  }

  async onChange($event) {
    try {
      this.arrProductos = await this.productosService.getByCat($event.target.value);
    } catch (error) {
      console.log(error);
    }
  }

  // Versión MALAMENTE
  // handleClick(producto) {
  //   if (localStorage.getItem('tokenCarrito')) {
  //     // AGREGAMOS PRODUCTO
  //   } else {
  //     // Carrito no está creado
  //     // Llamo al método del servicio que crea el carrito (con async await)
  //     this.productosService.createCart()
  //       .then(res => {
  //         console.log(res['token_cart']);
  //         localStorage.setItem('tokenCarrito', res['token_cart']);
  //         // AGREGAMOS PRODUCTO
  //       });
  //   }
  //   // Agregar el producto al carrito -> (producto, localStorage.getItem('tokenCarrito'))
  // }

  async handleClick(producto) {
    if (!localStorage.getItem('tokenCarrito')) {
      const res = await this.productosService.createCart();
      localStorage.setItem('tokenCarrito', res['token_cart']);
    }
    // AGREGO PRODUCTO AL CARRITO
    const res = await this.productosService.addProductToCart(producto.id, localStorage.getItem('tokenCarrito'));
    console.log(res);
  }

}
