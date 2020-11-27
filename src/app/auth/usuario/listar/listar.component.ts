import { Component, OnInit } from '@angular/core';

import Swal from 'sweetalert2';
import {Router} from '@angular/router';
import { from } from 'rxjs';

import { ExporterService } from '../../../service/exporter.service';
import { TokenService } from '../../../service/token.service';
import { Usuario } from 'src/app/Modelo/usuario';
import { AuthService } from '../../../service/auth.service';
import { Rol } from '../../../Modelo/Rol';
@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  usuario: Usuario = null;
  usuarios: Usuario[]=null;
  usuarioFilter: Usuario[]= null;
  busqueda: string;
  rol:Rol;
  roles: string[];
isAdmin=false;
isUser=false;
  constructor(private tokenService: TokenService, private service: AuthService,private router:Router, private servicioExportar: ExporterService) { 
    
  }

  ngOnInit(): void {
    this.service.getUsuarios().subscribe(data => 
      {this.usuarios = data.data ;
      this.usuarioFilter= this.usuarios;});
      this.roles = this.tokenService.getAuthorities();
      this.roles.forEach(rol => {
    if (rol === 'ROLE_ADMIN'){
      this.isAdmin = true;
    }
    if (rol === 'ROLE_USER'){
      this.isUser = true;
    }
  });
  }

  
  Nuevo(){
    
    this.router.navigate(["usuario/nuevo"]);
  }

  Exportar():void{
    this.servicioExportar.exportarExcel(this.usuarioFilter, 'Usuarios');
}
//Filtar 
  filtrarArticulo() {
  this.busqueda = this.busqueda.toLowerCase();
  this.usuarioFilter = this.usuarios;

  if (this.busqueda !== null) {    

    this.usuarioFilter = this.usuarios.filter((item) => {
      const inNombre = item.nombre.toLowerCase().indexOf(this.busqueda) !== -1;
      const inNombreUsuario = item.nombreUsuario.toLowerCase().indexOf(this.busqueda) !== -1;
      return inNombre || inNombreUsuario ;

    });
  }
}
}