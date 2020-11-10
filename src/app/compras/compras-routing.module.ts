import { NgModule, Component } from '@angular/core';
import { ComprasComponent } from './compras.component';

import{Routes, RouterModule} from '@angular/router';

const routes: Routes = [
    { path: "", component: ComprasComponent,
    },
];


@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class comprasRoutingModule{}