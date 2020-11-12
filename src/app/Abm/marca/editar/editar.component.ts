import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';
import { Marca } from '../../../Modelo/Marca';
import { MarcaService } from '../../../service/marca.service';
@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  formMarca:FormGroup;
  marca: Marca = new Marca();

  constructor(private router:Router, private service: MarcaService) {
    this.buildForm();
   }

  ngOnInit(): void {
    this.Editar();
  }
  Editar(){
    let id = localStorage.getItem("id");
    this.service.getMarcaId(+id).subscribe(data =>{
      this.marca=data.data;
    })
   
  }
 
  Actualizar(marca: Marca){
    if(this.formMarca.valid){
      this.service.actualizarMarca(marca)
    .subscribe(data=>{
      this.marca=data.data;
      
      this.router.navigate(["marca"]);
    })
  }
  }
  get nombre() { return this.formMarca.get('nombre'); }
  get descripcion() { return this.formMarca.get('descripcion'); }
 
  private buildForm(){
    this.formMarca = new FormGroup({
      nombre: new FormControl('',[Validators.required],),
      descripcion: new FormControl('',[Validators.required],),
      
    });

}
}

