import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PruebaService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users').toPromise();
  }

  createPost() {
    return this.http.post('https://jsonplaceholder.typicode.com/posts', {
      userId: 1,
      title: 'Lalalala',
      body: 'Cuerpo del post'
    }).toPromise();
  }

}
