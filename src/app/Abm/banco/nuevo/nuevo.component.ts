import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';
import { Banco } from '../../../Modelo/Banco';
import { BancoService } from '../../../service/banco.service';
@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {

  formBanco:FormGroup;
  banco: Banco = new Banco();

  constructor(private router:Router, private service: BancoService) {
    this.buildForm();
    }


  ngOnInit(): void {
  }
 Cancelar(){
   this.router.navigate(["banco"])
 }
  Guardar(){
    if(this.formBanco.valid){
    this.banco.estado=true;
    this.service.crearBanco(this.banco).subscribe(data=>{
      Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'Banco Creado',
        showConfirmButton: false,
        timer: 1500
      })
      this.router.navigate(["banco"]);
    })}
  }
  get nombreBanco() { return this.formBanco.get('nombreBanco'); }
  
  private buildForm(){
    this.formBanco = new FormGroup({
      nombreBanco: new FormControl('',[Validators.required, Validators.minLength(3)],),
      
    });

}
}
