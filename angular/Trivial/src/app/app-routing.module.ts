import { GameComponent } from './game/game.component';
import { MainComponent } from './main/main.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'juego', component: GameComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
