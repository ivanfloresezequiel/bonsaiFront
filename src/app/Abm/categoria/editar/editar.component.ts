import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/Modelo/Categoria';
import { Router } from '@angular/router';
import { CategoriaService } from '../../../service/categoria.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  categoria: Categoria = new Categoria();

  constructor(private router:Router, private service: CategoriaService) { }

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
    this.service.actualizarCategoria(categoria)
    .subscribe(data=>{
      this.categoria=data.data;
      
      this.router.navigate(["categorias"]);
    })
  }

}
