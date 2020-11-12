

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Response} from '../Modelo/Response';
import { Marca } from '../Modelo/Marca';


@Injectable({
  providedIn: 'root'
})
export class MarcaService {

  
  constructor(private http:HttpClient) { }
  Url='http://localhost:8080/marcas';

  getmarcas(){
    return this.http.get<Response>(this.Url+"/habilitados");
  }
  crearmarcas(marca: Marca){
    return this.http.post<Response>(this.Url, marca);
  }
  getMarcaId(id:number){
    return this.http.get<Response>(this.Url + "/"+ id);
  }
  actualizarMarca(marca: Marca){
    return this.http.put<Response>(this.Url+"/"+ marca.id_marca,marca);
  }
}