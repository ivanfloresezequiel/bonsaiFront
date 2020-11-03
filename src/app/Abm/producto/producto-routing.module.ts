import { NgModule, Component } from '@angular/core';
import { ProductoComponent } from './producto.component';
import { ListarComponent } from './listar/listar.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { EditarComponent } from './editar/editar.component';

import{Routes, RouterModule} from '@angular/router';

const routes: Routes = [
    { path: "", component:ProductoComponent,
    children:[
        {path: '', component: ListarComponent},
        {path:'nuevo', component:NuevoComponent},
       {path: 'editar', component:EditarComponent},
    ]},
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class productoRoutingModule{}