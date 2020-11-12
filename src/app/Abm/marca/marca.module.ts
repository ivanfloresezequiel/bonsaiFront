import{ NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { ngModuleJitUrl } from '@angular/compiler';

import { ReactiveFormsModule } from '@angular/forms';

import{FormsModule}from '@angular/forms';

import { MarcaComponent } from './marca.component';
import { marcaRoutingModule } from './marca-routing.module';
import { ListarComponent } from './listar/listar.component';
import { EditarComponent } from './editar/editar.component';
import { NuevoComponent } from './nuevo/nuevo.component';

@NgModule({
    declarations:[
        MarcaComponent,
        ListarComponent,
        EditarComponent,
        NuevoComponent
    ],
imports:[
    CommonModule, marcaRoutingModule, FormsModule, ReactiveFormsModule
]})
export class marcaModule{}