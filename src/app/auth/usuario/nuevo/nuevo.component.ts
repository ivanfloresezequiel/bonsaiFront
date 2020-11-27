import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../service/auth.service';
import { nuevoUsuario } from '../../../Modelo/nuevo-usuario';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {
  usuario: nuevoUsuario = new nuevoUsuario();
  formUsuario: FormGroup;
  rol:string;
  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  constructor(private service: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.buildForm();
  }

  async Guardar(){   
      // console.log(this.rol);
      if(this.rol === "admin"){
        this.usuario.roles.push('admin');
      }
      
     
    await console.log(this.usuario.roles);
    await this.service.nuevo(this.usuario).subscribe(data=>{
      Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'usuario Creado',
        showConfirmButton: false,
        timer: 1500
      })
      this.router.navigate(["usuario"]);
   })}
  
    get nombre() { return this.formUsuario.get('nombre'); }
  get nombreUsuario(){return this.formUsuario.get('nombreUsuario');}
  get mail(){return this.formUsuario.get('mail');}
  get password(){return this.formUsuario.get('password');}
  get roles(){return this.formUsuario.get('roles');}
  private buildForm(){

    this.formUsuario = new FormGroup({
      nombre: new FormControl('',[Validators.required]),
      nombreUsuario: new FormControl('',[Validators.required]),
      mail: new FormControl('',[Validators.required, Validators.pattern(this.emailPattern)]),
      password: new FormControl('',[Validators.required]),
      roles: new FormControl('',[Validators.required]),
    });

}
}
