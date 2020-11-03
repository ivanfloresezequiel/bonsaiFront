import { Component, OnInit } from '@angular/core';
import {Categoria} from '../../../Modelo/Categoria';
import {Router} from '@angular/router';
import { CategoriaService } from '../../../service/categoria.service';
@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {
  categoria: Categoria = new Categoria();

  constructor(private router:Router, private service: CategoriaService) {  }


  ngOnInit(): void {
  }
 
  Guardar(){
    this.service.crearCategoria(this.categoria)
    .subscribe(data=>{
      alert("Se agrego el categoria");
      this.router.navigate(["categorias"]);
    })
  }

}
