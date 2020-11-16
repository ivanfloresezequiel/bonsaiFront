import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {path:"productos",
  loadChildren: () => import ('./Abm/producto/producto.module').then(m=>m.productoModule),},
   { path:"categorias",
    loadChildren: () => import('./Abm/categoria/categoria.module').then(m=>m.categoriaModule),
  },
  { path:"proveedor",
    loadChildren: () => import('./Abm/proveedores/proveedor.module').then(m=>m.proveedorModule),
  },
  { path:"compras",
    loadChildren: () => import('./compras/compras.module').then(m=>m.comprasModule),
  },
  { path:"marca",
    loadChildren: () => import('./Abm/marca/marca.module').then(m=>m.marcaModule),
  },
  {
    path:"banco",
    loadChildren:() => import('./Abm/banco/banco.module').then(m=>m.bancoModule),
  },
 {
   path:"CuentaBancaria",
   loadChildren:() => import('./Abm/cuenta-bancaria/cuenta-bancaria.module').then(m=>m.cuentaBancariaModule),   
 },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
