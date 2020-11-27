import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Producto1 } from '../../../Modelo/Producto1';
import { Categoria } from '../../../Modelo/Categoria';
import { ProductoService } from '../../../service/producto.service';
import { CategoriaService } from '../../../service/categoria.service';
import { Marca } from '../../../Modelo/Marca';
import { MarcaService } from '../../../service/marca.service';
import { Proveedor } from '../../../Modelo/proveedor';
import { ProveedorService } from '../../../service/proveedor.service';


@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {
  producto: Producto1 = new Producto1();
  categorias: Categoria[] = null;
  cateogoriaSeleccionada: Categoria[]=[];
  categoria: Categoria;
  idCategoria:number;
  marcas:Marca[]=null;
  idMarca: number;
  marca :Marca = null;
  proveedores: Proveedor[]=null;
  proveedoreSeleccionado: Proveedor[]=[];
  proveedorID: number;
  proveedoresAGuardar:number[]=[]
  constructor(private router:Router, private serviceProducto: ProductoService, private service: CategoriaService, private serviceMarca: MarcaService, private proveedorService:ProveedorService) { }

  ngOnInit(): void {
    this.service.getCategorias().subscribe(data => {this.categorias = data.data;});
    this.serviceMarca.getmarcas().subscribe(data => {this.marcas = data.data;
      
      
    })
    this.proveedorService.getProveedor().subscribe(data =>{this.proveedores=data.data});
    
  }
  Agregar(){
    
    this.proveedorService.getProveedorId(this.proveedorID).subscribe(data => {
      if(this.proveedoresAGuardar.indexOf(this.proveedorID) === -1){
        console.log(this.proveedoresAGuardar.indexOf(this.proveedorID));
      this.proveedoreSeleccionado.push(data.data);
      this.proveedoresAGuardar.push(this.proveedorID);
      console.log(this.proveedoresAGuardar);
      
    }
    })

      
  }
  Quitar(){
    this.proveedorService.getProveedorId(this.proveedorID).subscribe(data =>{
      this.proveedoreSeleccionado.splice(this.proveedoreSeleccionado.indexOf(data.data),1);
      this.proveedoresAGuardar.splice(this.proveedoresAGuardar.indexOf(this.proveedorID),1);
    })
    
  }
   Guardar(){
      
      this.producto.proveedoresID=this.proveedoresAGuardar;
       this.serviceProducto.crearProducto(this.producto).subscribe(data => {
      
      alert("Se agrego el producto");
      this.router.navigate(["productos"]);
    })
  }
  CategoriaNueva(){
    this.router.navigate(["categorias/nuevo"])
  }

}




