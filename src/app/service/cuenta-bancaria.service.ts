import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Response} from '../Modelo/Response';
import { CuentaBancaria } from '../Modelo/CuentaBancaria';
import { cuentaBancariaDTO } from '../DTO/cuentaBancariaDTO';
@Injectable({
  providedIn: 'root'
})
export class CuentaBancariaService {

 
  constructor(private http:HttpClient) { }
  Url='http://localhost:8080/cuentas_bancarias';

  getCuentasBancarias(){
    return this.http.get<Response>(this.Url+"/habilitados");
  }
  crearCuentaBancaria(cuentaBancaria:cuentaBancariaDTO){
    return this.http.post<Response>(this.Url, CuentaBancaria);
  }
  // crearCuentaBancaria(cuentaBancaria:CuentaBancaria){
  //   return this.http.post<Response>(this.Url, CuentaBancaria);
  // }
  getCuentaBancariaId(id:number){
    return this.http.get<Response>(this.Url + "/"+ id);
  }
  actualizarCuentaBancaria(cuentaBancaria:CuentaBancaria){
    return this.http.put<Response>(this.Url+"/"+ cuentaBancaria.id_cuentaBancaria,cuentaBancaria);
  }
}
