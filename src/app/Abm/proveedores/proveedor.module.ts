import{ NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { ngModuleJitUrl } from '@angular/compiler';
import { ProveedoresComponent } from './proveedores.component';
import { proveedorRoutingModule } from './proveedor-routing.module';
import{FormsModule}from '@angular/forms';
import { ListarComponent } from './listar/listar.component';
import { EditarComponent } from './editar/editar.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations:[
        ProveedoresComponent,
        ListarComponent,
        EditarComponent,
        NuevoComponent
   ],
imports:[
    CommonModule, proveedorRoutingModule, FormsModule, ReactiveFormsModule
]})
export class proveedorModule{}