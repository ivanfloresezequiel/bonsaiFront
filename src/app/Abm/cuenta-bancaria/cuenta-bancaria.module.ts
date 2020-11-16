import {CommonModule} from '@angular/common';
import { ngModuleJitUrl } from '@angular/compiler';
import{ NgModule} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CuentaBancariaComponent } from './cuenta-bancaria.component';
import { cuentaBancariaRoutingModule } from './cuenta-bancaria-routing.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';

import{FormsModule}from '@angular/forms';
import { ListarComponent } from './listar/listar.component';
import { EditarComponent } from './editar/editar.component';
import { NuevoComponent } from './nuevo/nuevo.component';



@NgModule({
    declarations:[
        CuentaBancariaComponent,
        ListarComponent,
        EditarComponent,
        NuevoComponent,
    ],
imports:[
    CommonModule, cuentaBancariaRoutingModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule
]})
export class cuentaBancariaModule{}