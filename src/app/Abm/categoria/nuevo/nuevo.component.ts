import { Component, OnInit } from '@angular/core';
import {Categoria} from '../../../Modelo/Categoria';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { CategoriaService } from '../../../service/categoria.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {

  formCategoria:FormGroup;
  categoria: Categoria = new Categoria();

  constructor(private router:Router, private service: CategoriaService) {
    this.buildForm();
    }


  ngOnInit(): void {
  }
 
  Guardar(){
    if(this.formCategoria.valid){
    this.categoria.estado=true;
    this.categoria.etiqueta= this.categoria.etiqueta.toUpperCase();
    this.service.crearCategoria(this.categoria).subscribe(data=>{
      Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'Categoria Creada',
        showConfirmButton: false,
        timer: 1500
      })
      this.router.navigate(["categorias"]);
    })}
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
