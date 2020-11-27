import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { nuevoUsuario } from '../Modelo/nuevo-usuario';
import { LoginUsuario } from '../Modelo/login-usuario';
import { jwtDTO } from '../Modelo/JwtDTO';
import { Response } from '../Modelo/Response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  Url ='http://localhost:8080/auth/';
  constructor(private http:HttpClient) { }

  public nuevo(nuevoUsuario:nuevoUsuario){
    return this.http.post<Response>(this.Url + 'nuevo', nuevoUsuario);
  }
  public login(loginUsuario:LoginUsuario){
    return this.http.post<jwtDTO>(this.Url + 'login', loginUsuario);
  }
  getUsuarios(){
    return this.http.get<Response>(this.Url);
  }
  
  getUsuarioId(id:number){
    return this.http.get<Response>(this.Url + "/"+ id);
  }
}
