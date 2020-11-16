import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Response} from '../Modelo/Response';
import { Banco } from '../Modelo/Banco';
@Injectable({
  providedIn: 'root'
})
export class BancoService {

 
constructor(private http:HttpClient) { }
Url='http://localhost:8080/bancos';

getBancos(){
  return this.http.get<Response>(this.Url+"/habilitados");
}
crearBanco(banco: Banco){
  return this.http.post<Response>(this.Url, banco);
}
getBancoId(id:number){
  return this.http.get<Response>(this.Url + "/"+ id);
}
actualizarBanco(banco: Banco){
  return this.http.put<Response>(this.Url+"/"+ banco.id_banco,banco);
}
}