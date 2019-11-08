import { ListaLibrosComponent } from './lista-libros/lista-libros.component';
import { DetalleEscritorComponent } from './detalle-escritor/detalle-escritor.component';
import { ListaEscritoresComponent } from './lista-escritores/lista-escritores.component';
import { TestComponent } from './test/test.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'test', component: TestComponent },
  { path: 'escritores', component: ListaEscritoresComponent },
  {
    path: 'escritores/:idEscritor', component: DetalleEscritorComponent, children: [
      { path: 'libros', component: ListaLibrosComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
