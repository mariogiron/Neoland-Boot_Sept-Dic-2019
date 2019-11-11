import { Producto } from './models/producto.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://neolandshop.ngrok.io/items/';
  }

  getAll() {
    return this.http.get<Producto[]>(this.baseUrl).toPromise();
  }

  getByCat(pCategoria) {
    return this.http.get<Producto[]>(this.baseUrl + pCategoria).toPromise();
  }

  createCart() {
    return this.http.post(`${this.baseUrl}newcart`, {}).toPromise();
  }

  addProductToCart(productId, tokenCart) {
    const body = {
      item_id: productId
    };
    const httpOptions = {
      headers: new HttpHeaders({
        'Cart-Token': tokenCart
      })
    };
    return this.http.post(this.baseUrl + 'new', body, httpOptions).toPromise();
  }

  getCart(tokenCart) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Cart-Token': tokenCart
      })
    };
    return this.http.get<Producto[]>(`${this.baseUrl}cart`, httpOptions).toPromise();
  }

}
