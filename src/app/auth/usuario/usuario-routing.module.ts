import { NgModule, Component } from '@angular/core';
import { UsuarioComponent } from './usuario.component';




import{Routes, RouterModule} from '@angular/router';
import { NuevoComponent } from './nuevo/nuevo.component';
import { ListarComponent } from './listar/listar.component';

const routes: Routes = [
    { path: "", component: UsuarioComponent,
     children:[
        {path: '', component: ListarComponent },
         {path:'nuevo', component: NuevoComponent},
    //     {path: 'editar', component:},
     ]},

];


@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class usuarioRoutingModule{}