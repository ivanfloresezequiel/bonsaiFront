import { NgModule, Component } from '@angular/core';
import { ProveedoresComponent } from './proveedores.component';
import{Routes, RouterModule} from '@angular/router';
import { ListarComponent } from './listar/listar.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { EditarComponent } from './editar/editar.component';

const routes: Routes = [
    { path: "", component: ProveedoresComponent,
    children:[
        {path: '', component: ListarComponent},
        {path:'nuevo', component: NuevoComponent},
        {path: 'editar', component:EditarComponent},
    ]
},
];


@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class proveedorRoutingModule{}