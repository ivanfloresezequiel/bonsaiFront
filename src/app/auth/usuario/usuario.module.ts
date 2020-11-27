import{ NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { ngModuleJitUrl } from '@angular/compiler';

import { ReactiveFormsModule } from '@angular/forms';

import { UsuarioComponent } from './usuario.component';
import { usuarioRoutingModule } from './usuario-routing.module';


import{FormsModule}from '@angular/forms';
import { ListarComponent } from './listar/listar.component';
import { NuevoComponent } from './nuevo/nuevo.component';



@NgModule({
    declarations:[
      UsuarioComponent,
      ListarComponent,
      NuevoComponent,
    ],
imports:[
    CommonModule, usuarioRoutingModule, FormsModule, ReactiveFormsModule
]})
export class usuarioModule{}