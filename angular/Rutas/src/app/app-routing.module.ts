import { SaludoComponent } from './saludo/saludo.component';
import { Error404Component } from './error404/error404.component';
import { ContactoComponent } from './contacto/contacto.component';
import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // { path: '', pathMatch: 'full', component: AboutComponent },
  { path: '', pathMatch: 'full', redirectTo: '/sobremi' },
  { path: 'sobremi', component: AboutComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'hola/:saludo', component: SaludoComponent },
  { path: '**', component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
