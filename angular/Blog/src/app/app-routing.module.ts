import { FormularioComponent } from './formulario/formulario.component';
import { ListaPostsComponent } from './lista-posts/lista-posts.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'blog', component: ListaPostsComponent },
  { path: 'new', component: FormularioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
