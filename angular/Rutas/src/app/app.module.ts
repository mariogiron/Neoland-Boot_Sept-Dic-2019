import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactoComponent } from './contacto/contacto.component';
import { SaludoComponent } from './saludo/saludo.component';
import { AboutComponent } from './about/about.component';
import { Error404Component } from './error404/error404.component';
import { ProductoComponent } from './producto/producto.component';
import { RelatedComponent } from './related/related.component';
import { ReviewsComponent } from './reviews/reviews.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactoComponent,
    SaludoComponent,
    AboutComponent,
    Error404Component,
    ProductoComponent,
    RelatedComponent,
    ReviewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
