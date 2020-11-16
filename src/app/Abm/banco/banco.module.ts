import{ NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { ngModuleJitUrl } from '@angular/compiler';

import { ReactiveFormsModule } from '@angular/forms';
import { BancoComponent } from './banco.component';

import{FormsModule}from '@angular/forms';
import { bancoRoutingModule } from './banco-routing.module';
import { ListarComponent } from './listar/listar.component';
import { EditarComponent } from './editar/editar.component';
import { NuevoComponent } from './nuevo/nuevo.component';


@NgModule({
    declarations:[
        BancoComponent,
        ListarComponent,
        EditarComponent,
        NuevoComponent,
    ],
imports:[
    CommonModule, bancoRoutingModule, FormsModule, ReactiveFormsModule
]})
export class bancoModule{}