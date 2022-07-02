import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './components/agregar/agregar.component';
import { HomeComponent } from './components/home/home.component';
import { ModificarComponent } from './components/modificar/modificar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductosComponent } from './components/productos/productos.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'agregar', component: AgregarComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'modificar/:id', component: ModificarComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
