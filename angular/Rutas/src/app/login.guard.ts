import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate() {
    console.log('Pasa por el GUARD');
    const randomNum = Math.random();
    console.log(randomNum);
    if (randomNum > 0.5) {
      return true;
    } else {
      this.router.navigate(['/error']);
      return false;
    }
  }
}
