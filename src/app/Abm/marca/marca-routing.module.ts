import { NgModule, Component } from '@angular/core';
import { MarcaComponent } from './marca.component';
import { ListarComponent } from './listar/listar.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { EditarComponent } from './editar/editar.component';

import{Routes, RouterModule} from '@angular/router';

const routes: Routes = [
    { path: "", component: MarcaComponent,
    children:[
        {path: '', component: ListarComponent},
        {path:'nuevo', component: NuevoComponent},
        {path:'editar', component: EditarComponent},
    ]},
       
];


@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class marcaRoutingModule{}