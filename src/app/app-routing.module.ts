import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './auth/login.component';
import { RegistroComponent } from './auth/registro.component';

const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'login', component: LoginComponent},
  {path:'registro', component: RegistroComponent},
    {path:"productos",
  loadChildren: () => import ('./Abm/producto/producto.module').then(m=>m.productoModule),},
  {path:"usuario",
  loadChildren: () => import ('./auth/usuario/usuario.module').then(m=>m.usuarioModule),},
   { path:"categorias",
    loadChildren: () => import('./Abm/categoria/categoria.module').then(m=>m.categoriaModule),
  
  },
  { path:"proveedor",
    loadChildren: () => import('./Abm/proveedores/proveedor.module').then(m=>m.proveedorModule),
    //canActivate:[guards], data:{expectedRol: ['user']} 
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
