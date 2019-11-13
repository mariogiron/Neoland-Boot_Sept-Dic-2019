import { AdminComponent } from './admin/admin.component';
import { FormularioComponent } from './formulario/formulario.component';
import { SliderComponent } from './slider/slider.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'slider', component: SliderComponent },
  { path: 'new', component: FormularioComponent },
  { path: 'admin', component: AdminComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
