import { LoginGuard } from './login.guard';
import { ReviewsComponent } from './reviews/reviews.component';
import { RelatedComponent } from './related/related.component';
import { ProductoComponent } from './producto/producto.component';
import { SaludoComponent } from './saludo/saludo.component';
import { Error404Component } from './error404/error404.component';
import { ContactoComponent } from './contacto/contacto.component';
import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // { path: '', pathMatch: 'full', component: AboutComponent },
  { path: '', pathMatch: 'full', redirectTo: '/sobremi' },
  { path: 'sobremi', component: AboutComponent, canActivate: [LoginGuard] },
  { path: 'contacto', component: ContactoComponent, canActivate: [LoginGuard] },
  { path: 'hola/:saludo', component: SaludoComponent },
  {
    path: 'producto/:idProducto', component: ProductoComponent, children: [
      { path: 'related', component: RelatedComponent },
      { path: 'reviews', component: ReviewsComponent }
    ]
  },
  { path: 'error', component: Error404Component },
  { path: '**', component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


