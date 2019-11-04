import { Producto } from './models/producto.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  arrComida: Producto[];
  arrBebida: Producto[];
  productosSeleccionados: any[];

  constructor() {
    this.productosSeleccionados = [];
    this.arrComida = [
      new Producto('Cocido', 7.89, 'https://www.laespanolaaceites.com/wp-content/uploads/2019/06/cocido-madrileno-1080x671.jpg'),
      new Producto('Paella', 8.89, 'http://www.'),
      new Producto('Tortilla Patata', 3.89, 'http://www.'),
      new Producto('Lentejas', 5.89, 'http://www.'),
      new Producto('Judías Pintas', 6.59, 'http://www.'),
    ];
    this.arrBebida = [
      new Producto('Coca Cola', 1.5, 'https://dreamfood.es/320-large_default/cocacola-original-33cl.jpg'),
      new Producto('Pespi', 1.2, 'http://wwww.cocacola.es/imagen'),
      new Producto('Cerveza', 2.7, 'http://wwww.cocacola.es/imagen'),
      new Producto('Gin Tonic Pepino', 4.5, 'http://wwww.cocacola.es/imagen'),
      new Producto('Agua Grifo', 0.5, 'http://wwww.cocacola.es/imagen'),
    ];
  }

  manejaProductoSeleccionado($event) {
    // Buscamos si el producto ya está insertado en el array de productos seleccionados
    const encontrado = this.productosSeleccionados.find((item) => {
      return item.producto.nombre === $event.nombre;
    });
    // Si el producto ya está insertado, aumentamos su cantidad
    if (encontrado) {
      encontrado.cantidad++;
    } else {
      // Si no está insertado, lo insertamos, poniendo 1 a la cantidad
      this.productosSeleccionados.push({
        cantidad: 1,
        producto: $event
      });
    }
  }
}


// { nombre: 'Cocido', precio: 4.54, imagen: '' } -> $event

// [
//   { cantidad: 1, producto: { nombre: 'Paella', precio: 4.54, imagen: '' } },
//   { cantidad: 2, producto: { nombre: 'Cocido', precio: 4.54, imagen: '' } }
// ] -> productosSeleccionados

// { cantidad: 1, producto: { nombre: 'Cocido', precio: 4.54, imagen: '' } } -> encontrado