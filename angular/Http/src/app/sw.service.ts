import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SwService {

  constructor(private http: HttpClient) { }

  getPlanets(pPagina) {
    return this.http.get('https://swapi.co/api/planets/?format=json&page=' + pPagina).toPromise();
  }

}