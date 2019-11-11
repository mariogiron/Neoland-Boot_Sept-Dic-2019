import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SwService {

  constructor(private http: HttpClient) { }

  getPlanets(pPagina) {
    return this.http.get<any[]>('https://swapi.co/api/planets/?format=json&page=' + pPagina).toPromise();
  }

  getRandomNum(pMax, pMin) {
    const httpOptions = {
      headers: new HttpHeaders({
        NeolandUserId: 'HLASIO2122111P'
      })
    };
    const body = {
      max: pMax,
      min: pMin
    };
    return this.http.post('http://neorandom.ngrok.io/random/num', body, httpOptions).toPromise();
  }

}
