import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/Modelo/Categoria';
import { CategoriaService } from '../../../service/categoria.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  categoria: Categoria= null;
  categorias: Categoria[]=null;
  
  
  constructor(private service: CategoriaService,private router:Router) { 
    
  }

  ngOnInit(): void {
    this.service.getCategorias().subscribe(data => {this.categorias = data.data;});
    
  }
  Editar(categoria: Categoria){
    localStorage.setItem("id", categoria.id_categoria.toString());
    this.router.navigate(["categorias/editar"]);
  }
}
