import{ NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { ngModuleJitUrl } from '@angular/compiler';

import { ReactiveFormsModule } from '@angular/forms';
import { ProductoComponent } from './producto.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import{FormsModule}from '@angular/forms';
import { productoRoutingModule } from './producto-routing.module';
import { ListarComponent } from './listar/listar.component';
import { EditarComponent } from './editar/editar.component';
import { NuevoComponent } from './nuevo/nuevo.component';



@NgModule({
    declarations:[
    ProductoComponent,
    ListarComponent,
    EditarComponent,
    NuevoComponent],
imports:[
    CommonModule,productoRoutingModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule
]})
export class productoModule{}