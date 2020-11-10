import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Proveedor } from '../../../Modelo/proveedor';
import { ProveedorService } from '../../../service/proveedor.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  proveedor: Proveedor = null;
  proveedores: Proveedor[] = null;
  
  constructor(private service: ProveedorService, private router:Router) { 
    
  }

  ngOnInit(): void {
    this.service.getProveedor().subscribe(data =>{
      this.proveedores = data.data;
    })    
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



