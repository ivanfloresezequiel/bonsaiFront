import { Component, OnInit } from '@angular/core';
import {Marca} from '../../../Modelo/Marca';
import {MarcaService} from '../../../service/marca.service';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';
import { from } from 'rxjs';
import { ExporterService } from '../../../service/exporter.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  marca: Marca=null;
  marcas: Marca[]=null;
  marcasFilter: Marca[] = null;
  busqueda: string = null;
  
  constructor(private service: MarcaService,private router:Router, private servicioExportar: ExporterService) { 
    
  }

  ngOnInit(): void {
    this.service.getmarcas().subscribe(data => {this.marcas = data.data;
      this.marcasFilter= this.marcas;});
  }
  Editar(marca: Marca){
    localStorage.setItem("id", marca.id_marca.toString());
    this.router.navigate(["marca/editar"]);
  }
  Nuevo(){
    
    this.router.navigate(["marca/nuevo"]);
  }
  Eliminar(marca:Marca){
  
    
    Swal.fire({
      title: 'Desea Eliminar esta Marca?',
      text: "",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar'
    }).then((result) => {
      if (result.isConfirmed) {
        marca.estado=false;
        this.service.actualizarMarca(marca).subscribe(data=>{
          this.marca = data.data;
          
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
    this.servicioExportar.exportarExcel(this.marcasFilter, 'Marcas');
}
//Filtar 
  filtrarArticulo() {
  this.busqueda = this.busqueda.toLowerCase();
  this.marcasFilter = this.marcas;

  if (this.busqueda !== null) {    

    this.marcasFilter = this.marcas.filter((item) => {
      const inNombre = item.descripcion.toLowerCase().indexOf(this.busqueda) !== -1;
      const inDescripcion =
        item.descripcion.toLowerCase().indexOf(this.busqueda) !== -1;
      
      return inNombre || inDescripcion ;

    });
  }
}
}
