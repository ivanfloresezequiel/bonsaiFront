import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/Modelo/Categoria';
import { Router } from '@angular/router';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import { CategoriaService } from '../../../service/categoria.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  
  categoria: Categoria = new Categoria();
  formCategoria:FormGroup;
  constructor(private router:Router, private service: CategoriaService) {
    this.buildForm();
   }

  ngOnInit(): void {
    this.Editar();
  }
  Editar(){
    let id = localStorage.getItem("id");
    this.service.getCategoriaId(+id).subscribe(data =>{
      this.categoria=data.data;
    })
   
  }
  Actualizar(categoria: Categoria){
    if(this.formCategoria.valid){
       this.categoria.etiqueta= this.categoria.etiqueta.toUpperCase();
      this.service.actualizarCategoria(categoria)
    .subscribe(data=>{
      this.categoria=data.data;
      
      this.router.navigate(["categorias"]);
    })
  }
  }
  get descripcion() { return this.formCategoria.get('descripcion'); }
  get abreviatura() { return this.formCategoria.get('abreviatura'); }

  private buildForm(){
    this.formCategoria = new FormGroup({
      descripcion: new FormControl('',[Validators.required, Validators.minLength(3)],),
      abreviatura: new FormControl('',[Validators.required, Validators.maxLength(5)],),
    });

}

}
