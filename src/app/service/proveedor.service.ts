import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Response} from '../Modelo/Response';
import { Proveedor } from '../Modelo/proveedor';
@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  constructor(private http:HttpClient) { }
  Url='http://localhost:8080/proveedores';

  getProveedor(){
    return this.http.get<Response>(this.Url+"/habilitados");
  }
  crearProveedor(proveedor: Proveedor){
    return this.http.post<Response>(this.Url, proveedor);
  }
  getProveedorId(id:number){
    return this.http.get<Response>(this.Url + "/"+ id);
  }
  actualizarProveedor(proveedor: Proveedor){
    return this.http.put<Response>(this.Url+"/"+ proveedor.id_proveedor, proveedor);
  }
}

