import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { GameComponent } from './game/game.component';
import { BotoneraComponent } from './botonera/botonera.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    GameComponent,
    BotoneraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
