import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import { Proveedor } from '../../../Modelo/proveedor';
import { ProveedorService } from '../../../service/proveedor.service';
import {debounceTime} from 'rxjs/operators';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {


  
  proveedor: Proveedor = new Proveedor();
  formProveedor:FormGroup;
  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(private router:Router, private service: ProveedorService) {
    this.buildForm();
   }

  ngOnInit(): void {
    
  }
  Guardar(){
    if(this.formProveedor.valid){
      this.proveedor.estado=true;
      this.service.crearProveedor(this.proveedor).subscribe(data => {
        Swal.fire({
          position: 'top',
          icon: 'success',
          title: 'Proveedor Creado',
          showConfirmButton: false,
          timer: 1500
        })
        this.router.navigate(["proveedor"]); })
    }
    
   
}
get nombre() { return this.formProveedor.get('nombre'); }
get telefono() { return this.formProveedor.get('telefono_fijo'); }
get razonSocial() { return this.formProveedor.get('razon_social'); }
get whatsapp() { return this.formProveedor.get('whatsapp'); }
get cuit() { return this.formProveedor.get('cuit'); }
get direccion() { return this.formProveedor.get('direccion'); }
get mail() { return this.formProveedor.get('mail'); }

private buildForm(){
  this.formProveedor = new FormGroup({
    nombre: new FormControl('',[Validators.required, Validators.minLength(3), ],),
    telefono_fijo: new FormControl('',[Validators.required]),
    razon_social: new FormControl('',[Validators.required,Validators.minLength(8)]),
    whatsapp: new FormControl('', [Validators.required]),
    cuit: new FormControl('',[Validators.required]),
    direccion: new FormControl('',[Validators.required,Validators.minLength(5)]),
    mail: new FormControl('',[Validators.email,Validators.required, Validators.pattern(this.emailPattern)]),

  });
  this.formProveedor.valueChanges.pipe(debounceTime(500)).subscribe(value=>{
    console.log(value);
  })
}

}
