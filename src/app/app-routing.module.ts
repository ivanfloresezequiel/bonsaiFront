import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {path:"productos",
  loadChildren: () => import ('./Abm/producto/producto.module').then(m=>m.productoModule),},
   { path:"categorias",
    loadChildren: () => import('./Abm/categoria/categoria.module').then(m=>m.categoriaModule),
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
