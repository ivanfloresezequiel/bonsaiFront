import { NgModule, Component } from '@angular/core';
import { CuentaBancariaComponent } from './cuenta-bancaria.component';



import{Routes, RouterModule} from '@angular/router';

import { NuevoComponent } from './nuevo/nuevo.component';
import { EditarComponent } from './editar/editar.component';
import { ListarComponent } from './listar/listar.component';

const routes: Routes = [
    { path: "", component: CuentaBancariaComponent,
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
export class cuentaBancariaRoutingModule{}