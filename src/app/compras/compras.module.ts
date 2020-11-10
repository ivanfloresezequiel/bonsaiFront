import{ NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { ngModuleJitUrl } from '@angular/compiler';
import { ComprasComponent } from './compras.component';
import { comprasRoutingModule } from './compras-routing.module';

import{FormsModule}from '@angular/forms';

@NgModule({
    declarations:[
        ComprasComponent
   ],
imports:[
    CommonModule, comprasRoutingModule, FormsModule
]})
export class comprasModule{}