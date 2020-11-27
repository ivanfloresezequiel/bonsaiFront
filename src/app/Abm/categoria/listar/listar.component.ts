import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/Modelo/Categoria';
import { CategoriaService } from '../../../service/categoria.service';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';
import { ExporterService } from '../../../service/exporter.service';
import { TokenService } from '../../../service/token.service';
@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  categoria: Categoria= null;
  categorias: Categoria[]=null;
  categoriasFilter: Categoria[]=null;
  busqueda: string= null;
  roles: string[];
  isAdmin=false;
  isUser = false;
  constructor(private tokenService: TokenService, private service: CategoriaService,private router:Router, private servicioExportar: ExporterService) { 
    
  }

  ngOnInit(): void {
    this.service.getCategorias().subscribe(data => {this.categorias = data.data;
    this.categoriasFilter=this.categorias});
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
  Editar(categoria: Categoria){
    localStorage.setItem("id", categoria.id_categoria.toString());
    this.router.navigate(["categorias/editar"]);
  }
  Nuevo(){
    
    this.router.navigate(["categorias/nuevo"]);
  }
  Eliminar(categoria:Categoria){
  
    
    Swal.fire({
      title: 'Desea Eliminar esta Categoria?',
      text: "",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar'
    }).then((result) => {
      if (result.isConfirmed) {
        categoria.estado=false;
        this.service.actualizarCategoria(categoria).subscribe(data=>{
          this.categoria = data.data;
        
    })
        Swal.fire(
          'Eliminado!',
          'La categoria ha sido eliminada',
          'success'
        )
        location.reload();
      }
    })
    
  }
Exportar():void{
    this.servicioExportar.exportarExcel(this.categoriasFilter, 'categorias');
}
//Filtar 
  filtrarArticulo() {
  this.busqueda = this.busqueda.toLowerCase();
  this.categoriasFilter = this.categorias;

  if (this.busqueda !== null) {    

    this.categoriasFilter = this.categorias.filter((item) => {
      const inNombre = item.descripcion.toLowerCase().indexOf(this.busqueda) !== -1;
      const inRazonSocial =
        item.etiqueta.toLowerCase().indexOf(this.busqueda) !== -1;
      
      return inNombre || inRazonSocial ;

    });
  }
}
}
