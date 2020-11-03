import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Response} from '../Modelo/Response';
import { Producto } from '../Modelo/Producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

 
  constructor(private http:HttpClient) { }
  Url='http://localhost:8080/categoria';

  getProducto(){
    return this.http.get<Response>(this.Url);
  }
  crearProducto(producto: Producto){
    return this.http.post<Response>(this.Url, producto);
  }
  getProductoId(id:number){
    return this.http.get<Response>(this.Url + "/"+ id);
  }
  actualizarCategoria(producto:Producto){
    return this.http.put<Response>(this.Url+"/"+producto.id_producto,producto);
  }
}
