import{ NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { ngModuleJitUrl } from '@angular/compiler';

import { ReactiveFormsModule } from '@angular/forms';
import { categoriaRoutingModule } from './categoria-routing.module';
import { CategoriaComponent } from './categoria.component';
import{FormsModule}from '@angular/forms';
import { ListarComponent } from './listar/listar.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { EditarComponent } from './editar/editar.component';

@NgModule({
    declarations:[
    CategoriaComponent,
    ListarComponent,
    NuevoComponent,
    EditarComponent],
imports:[
    CommonModule, categoriaRoutingModule, FormsModule, ReactiveFormsModule
]})
export class categoriaModule{}