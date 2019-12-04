import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlanetasService {

  constructor(private http: HttpClient) { }

  getAll(): Promise<any> {
    return this.http.get<any[]>('https://swapi.co/api/planets/?format=json').toPromise();
  }
}
