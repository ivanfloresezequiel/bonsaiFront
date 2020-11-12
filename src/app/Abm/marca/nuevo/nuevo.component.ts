import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';
import { Marca } from '../../../Modelo/Marca';
import { MarcaService } from '../../../service/marca.service';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {

  formMarca:FormGroup;
  marca: Marca = new Marca();

  constructor(private router:Router, private service: MarcaService) {
    this.buildForm();
    }


  ngOnInit(): void {
  }
 
  Guardar(){
    if(this.formMarca.valid){
    this.marca.estado=true;
    this.service.crearmarcas(this.marca).subscribe(data=>{
      Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'Marca Creada',
        showConfirmButton: false,
        timer: 1500
      })
      this.router.navigate(["marca"]);
    })}
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