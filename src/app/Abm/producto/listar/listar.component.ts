
import { Component, OnInit } from '@angular/core';
import{Producto} from '../../../Modelo/Producto';
import{ ProductoService } from '../../../service/producto.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})


export class ListarComponent implements OnInit {
  
  producto:Producto=null;
  productos:Producto[]=null;
  
  
  
  constructor(private service: ProductoService,private router:Router) { 
    
  }

  ngOnInit(): void {
    alert("Se agrego el categoria");
    this.service.getProducto().subscribe(data => {this.productos=data.data});  
    
  }
  Editar(producto:Producto){
    localStorage.setItem("id", producto.id_producto.toString());
    this.router.navigate(["productos/editar"]);
  }
}