import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginUsuario } from '../Modelo/login-usuario';
import { HttpClient } from '@angular/common/http';
import { jwtDTO } from '../Modelo/JwtDTO';


@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  private url: string = 'http://localhost:8080';

  constructor(private http: HttpClient) { }


  public login(loginUsuario: LoginUsuario): Observable<jwtDTO> {
    return this.http.post<jwtDTO>(this.url + '/login', loginUsuario);

  }

}
