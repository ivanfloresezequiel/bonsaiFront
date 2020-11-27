import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';

import { CuentaBancaria } from 'src/app/Modelo/CuentaBancaria';

import Swal from 'sweetalert2';
import { CuentaBancariaService } from '../../../service/cuenta-bancaria.service';
import { BancoService } from '../../../service/banco.service';
import { Banco } from 'src/app/Modelo/Banco';
import { ProveedorService } from '../../../service/proveedor.service';
import { Proveedor } from '../../../Modelo/proveedor';
import { MatInputModule } from '@angular/material/input';
import { cuentaBancariaDTO } from '../../../DTO/cuentaBancariaDTO';
@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {
   cuentaBancaria: cuentaBancariaDTO= new cuentaBancariaDTO();
   idBanco:number=null;
  proveedor:Proveedor ;

  idProveedor:number=null;
  formCuenta:FormGroup;
 banco: Banco;
  bancos : Banco[]=null;
 
  proveedores: Proveedor[]=null
  
  constructor(private router:Router, private service: CuentaBancariaService, private servicioBanco: BancoService, private servicioProveedor:ProveedorService) {
    
    }


  ngOnInit(): void {
    this.buildForm();
    
    this.servicioBanco.getBancos().subscribe(data => {this.bancos = data.data });
    this.servicioProveedor.getProveedor().subscribe(data=>{
      this.proveedores=data.data;

    })
    }
 
  async Guardar(){      
  
      if(this.formCuenta.valid){
        this.cuentaBancaria.estado=true;
        console.log(this.cuentaBancaria);
     await this.service.crearCuentaBancaria(this.cuentaBancaria).subscribe(data=>{
      Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'Cuenta Bancaria Creada',
        showConfirmButton: false,
        timer: 1500
      })
      this.router.navigate(["CuentaBancaria"]);
    })
  }}
  
  get bancoID() { return this.formCuenta.get('bancoID'); }
  get tipoCuenta(){return this.formCuenta.get('tipoCuenta');}
  get cbu(){return this.formCuenta.get('cbu');}
  get proveedorID(){return this.formCuenta.get('proveedorID');}
  private buildForm(){

    this.formCuenta = new FormGroup({
      bancoID: new FormControl('',[Validators.required]),
      tipoCuenta: new FormControl('',[Validators.required]),
      cbu: new FormControl('',[Validators.required]),
      proveedorID: new FormControl('',[Validators.required]),
    });

}
}
