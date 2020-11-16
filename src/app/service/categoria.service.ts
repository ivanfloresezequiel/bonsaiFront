import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Response} from '../Modelo/Response';
import { Categoria } from '../Modelo/Categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

 
  constructor(private http:HttpClient) { }
  Url='http://localhost:8080/categorias';

  getCategorias(){
    return this.http.get<Response>(this.Url+"/habilitados");
  }
  crearCategoria(categoria:Categoria){
    return this.http.post<Response>(this.Url, categoria);
  }
  getCategoriaId(id:number){
    return this.http.get<Response>(this.Url + "/"+ id);
  }
  actualizarCategoria(categoria: Categoria){
    return this.http.put<Response>(this.Url+"/"+ categoria.id_categoria,categoria);
  }
}
