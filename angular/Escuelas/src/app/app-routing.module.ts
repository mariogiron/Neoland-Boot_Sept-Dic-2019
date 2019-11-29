import { LoginComponent } from './usuarios/login/login.component';
import { FormularioComponent } from './alumnos/formulario/formulario.component';
import { ListaComponent } from './alumnos/lista/lista.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'alumnos', component: ListaComponent },
  { path: 'alumnos/new', component: FormularioComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
