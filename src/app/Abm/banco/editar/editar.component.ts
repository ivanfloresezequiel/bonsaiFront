import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import { Banco } from '../../../Modelo/Banco';
import { BancoService } from '../../../service/banco.service';
@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  
  banco: Banco = new Banco();
  formBanco:FormGroup;
  constructor(private router:Router, private service: BancoService) {
    this.buildForm();
   }

  ngOnInit(): void {
    this.Editar();
  }
  Editar(){
    let id = localStorage.getItem("id");
    this.service.getBancoId(+id).subscribe(data =>{
      this.banco=data.data;
    })
   
  }
  Actualizar(banco: Banco){
    if(this.formBanco.valid){
      this.service.actualizarBanco(banco)
    .subscribe(data=>{
      this.banco=data.data;
      
      this.router.navigate(["banco"]);
    })
  }
  }
  get nombreBanco() { return this.formBanco.get('nombreBanco'); }
  
  private buildForm(){
    this.formBanco = new FormGroup({
      nombreBanco: new FormControl('',[Validators.required, Validators.minLength(3)],),
      
    });

}

}
