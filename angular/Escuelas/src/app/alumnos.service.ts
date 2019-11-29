import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:3000/api/alumnos';
  }

  getAll(): Promise<any[]> {
    let httpOptions = {};
    if (localStorage.getItem('user-token')) {
      httpOptions = {
        headers: new HttpHeaders({
          'user-token': localStorage.getItem('user-token')
        })
      };
    }
    return this.http.get<any[]>(this.baseUrl, httpOptions).toPromise();
  }

  insert(values): Promise<any> {
    return this.http.post(this.baseUrl, values).toPromise();
  }

}
