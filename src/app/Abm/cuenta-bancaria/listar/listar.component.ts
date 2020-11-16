import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';
import { ExporterService } from '../../../service/exporter.service';
import { CuentaBancaria } from '../../../Modelo/CuentaBancaria';
import { CuentaBancariaService } from '../../../service/cuenta-bancaria.service';
@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  cuentaBancaria: CuentaBancaria= null;
  cuentaBancarias: CuentaBancaria[]=null;
  cuentasFilter: CuentaBancaria[]=null;
  busqueda: string= null;
  
  constructor(private service: CuentaBancariaService,private router:Router, private servicioExportar: ExporterService) { 
    
  }

  ngOnInit(): void {
    
    this.service.getCuentasBancarias().subscribe(data => {this.cuentaBancarias = data.data;
    this.cuentasFilter=this.cuentaBancarias});
    
  }
  Editar(cuentaBancaria:CuentaBancaria){
    localStorage.setItem("id",cuentaBancaria.id_cuentaBancaria.toString());
    this.router.navigate(["CuentaBancaria/editar"]);
  }
  Nuevo(){
    
    this.router.navigate(["CuentaBancaria/nuevo"]);
  }
  Eliminar(cuentaBancaria:CuentaBancaria){
  
    
    Swal.fire({
      title: 'Desea Eliminar esta Cuenta Bancaria?',
      text: "",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar'
    }).then((result) => {
      if (result.isConfirmed) {
        cuentaBancaria.estado=false;
        this.service.actualizarCuentaBancaria(cuentaBancaria).subscribe(data=>{
          this.cuentaBancaria = data.data;
        
    })
        Swal.fire(
          'Eliminado!',
          'La cuenta ha sido eliminada',
          'success'
        )
        location.reload();
      }
    })
    
  }
Exportar():void{
    this.servicioExportar.exportarExcel(this.cuentasFilter, 'cuantaBancaria');
}
//Filtar 
  filtrarArticulo() {
  this.busqueda = this.busqueda.toLowerCase();
  this.cuentasFilter = this.cuentaBancarias;

  if (this.busqueda !== null) {    

    this.cuentasFilter = this.cuentaBancarias.filter((item) => {
      const inTipoCuenta = item.tipoCuenta.toLowerCase().indexOf(this.busqueda) !== -1;
      const inNombreBanco =
        item.bancoID.nombreBanco.toLowerCase().indexOf(this.busqueda) !== -1;
      
      return inNombreBanco || inTipoCuenta ;

    });
  }
}
}