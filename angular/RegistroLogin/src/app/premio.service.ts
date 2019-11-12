import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PremioService {

  constructor(private http: HttpClient) { }

  getPremio() {
    const httpOptions = {
      headers: new HttpHeaders(
        { 'user-token': '!y%?sh$95mV4c?YFrtay' }
      )
    };
    return this.http.get('http://registrate.ngrok.io/premio', httpOptions).toPromise();
  }

  registroUsuario({ name, surname, username, password, mail, address, age }) {
    return this.http.post('http://registrate.ngrok.io/register', { name, surname, username, password, mail, address, age }).toPromise();
  }

  // registroUsuario(formValues) {
  //   return this.http.post('http://registrate.ngrok.io/register', formValues).toPromise();
  // }

  loginUsuario(pUsername, pPassword) {
    return this.http.post('http://registrate.ngrok.io/login', {
      username: pUsername,
      password: pPassword
    }).toPromise();
  }

}
