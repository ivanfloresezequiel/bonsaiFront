import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Proveedor } from '../../../Modelo/proveedor';
import { ProveedorService } from '../../../service/proveedor.service';
import Swal from 'sweetalert2';
import { ExporterService } from '../../../service/exporter.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  proveedor: Proveedor = null;
  proveedores: Proveedor[] = null;
  proveedoresFilter: Proveedor[] = [];
  busqueda: string = null;
  constructor(private service: ProveedorService, private router:Router, private servicioExportar: ExporterService) { 
    
  }

  ngOnInit(): void {
    this.service.getProveedor().subscribe(data =>{
      this.proveedores = data.data;
      this.proveedoresFilter= this.proveedores;
    })    
  }


  Exportar():void{
      this.servicioExportar.exportarExcel(this.proveedoresFilter, 'Proveedores');
  }
  //Filtar 
    filtrarArticulo() {
    this.busqueda = this.busqueda.toLowerCase();
    this.proveedoresFilter = this.proveedores;

    if (this.busqueda !== null) {    

      this.proveedoresFilter = this.proveedores.filter((item) => {
        const inNombre = item.nombre.toLowerCase().indexOf(this.busqueda) !== -1;
        const inRazonSocial =
          item.razon_social.toLowerCase().indexOf(this.busqueda) !== -1;
        const inMail =
          item.mail.toLowerCase().indexOf(this.busqueda) !== -1;
        return inNombre || inRazonSocial || inMail;

      });
    }
  }






  Editar(proveedor: Proveedor){
    localStorage.setItem("id", proveedor.id_proveedor.toString());
    this.router.navigate(["proveedor/editar"]);
  }
  
  Eliminar(proveedor:Proveedor){
    Swal.fire({
      title: 'Desea Eliminar este Proveedor?',
      text: "",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar'
    }).then((result) => {
      if (result.isConfirmed) {
       
        proveedor.estado=false;
        this.service.actualizarProveedor(proveedor).subscribe(data=>{
        this.proveedor = data.data;
        
    })
        Swal.fire(
          'Eliminado!',
          'El proveedor ha sido eliminado',
          'success'
        )
        location.reload();
      }
    })
    
  }
 
  
  Nuevo(){
    
    this.router.navigate(["proveedor/nuevo"]);
  }

}



