import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Producto } from '../../../Modelo/Producto';
import { Categoria } from '../../../Modelo/Categoria';
import { ProductoService } from '../../../service/producto.service';
import { CategoriaService } from '../../../service/categoria.service';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {
  producto: Producto = new Producto();
  categorias: Categoria[] = null;
  constructor(private router:Router, private serviceProducto: ProductoService, private service: CategoriaService) { }

  ngOnInit(): void {
    this.service.getCategorias().subscribe(data => {this.categorias = data.data;});
  }
  Guardar(){
    this.serviceProducto.crearProducto(this.producto).subscribe(data => {
      alert("Se agrego el producto");
      this.router.navigate(["productos"]);
    })
  }
  CategoriaNueva(){
    this.router.navigate(["categorias/nuevo"])
  }

}




