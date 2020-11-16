import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';
import { from } from 'rxjs';
import { Banco } from '../../../Modelo/Banco';
import { BancoService } from '../../../service/banco.service';
import { ExporterService } from '../../../service/exporter.service';
@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  banco:Banco = null;
  bancos: Banco[]=null;
  bancosFilter: Banco[]= null;
  busqueda: string;
  constructor(private service: BancoService,private router:Router, private servicioExportar: ExporterService) { 
    
  }

  ngOnInit(): void {
    this.service.getBancos().subscribe(data => {this.bancos = data.data;
      this.bancosFilter= this.bancos;});
  }
  Editar(banco: Banco){
    localStorage.setItem("id",banco.id_banco.toString());
    this.router.navigate(["banco/editar"]);
  }
  Nuevo(){
    
    this.router.navigate(["banco/nuevo"]);
  }
  Eliminar(banco:Banco){
  
    
    Swal.fire({
      title: 'Desea Eliminar este Banco?',
      text: "",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar'
    }).then((result) => {
      if (result.isConfirmed) {
        banco.estado=false;
        this.service.actualizarBanco(banco).subscribe(data=>{
          this.banco = data.data;
          
    })
        Swal.fire(
          'Eliminado!',
          'El banco ha sido eliminado',
          'success'
        )
        location.reload();
      }
    })
    
  }
  Exportar():void{
    this.servicioExportar.exportarExcel(this.bancosFilter, 'Bancos');
}
//Filtar 
  filtrarArticulo() {
  this.busqueda = this.busqueda.toLowerCase();
  this.bancosFilter = this.bancos;

  if (this.busqueda !== null) {    

    this.bancosFilter = this.bancos.filter((item) => {
      const inNombre = item.nombreBanco.toLowerCase().indexOf(this.busqueda) !== -1;
      
      return inNombre  ;

    });
  }
}
}


 