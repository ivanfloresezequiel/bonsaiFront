import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { TokenService } from '../service/token.service';

import { Router } from '@angular/router';
import { LoginUsuario } from '../Modelo/login-usuario';
import { AutenticacionService } from '../service/autenticacion.service';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() pressLogin = new EventEmitter<boolean>();
  usuario: LoginUsuario;
  nombreUsuario = "";
  password = "";
  loginInvalido = false;
  errMsj: string;
  consulta = true;
  isLogged = false;
  roles: string[];
  viewPassword = true;

  constructor(private tokenservice: TokenService,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    if (this.tokenservice.getToken()) {
      this.isLogged = true;
      this.loginInvalido = false;
      this.roles = this.tokenservice.getAuthorities();
    }
  }

  onLogin(): void {
    
    this.usuario = new LoginUsuario(this.nombreUsuario, this.password);
    (this.authService.login(this.usuario).subscribe(
      data => {
        this.isLogged = true;
        this.loginInvalido = false;
        this.tokenservice.setToken(data.token);
        this.tokenservice.setUserName(data.nombreUsuario);
        this.tokenservice.setAuthorities(data.authorities);
        this.roles = data.authorities;
        this.pressLogin.emit(true);
      },
      error => {
        this.consulta=false;
        this.loginInvalido = true;
        this.isLogged = false;
      }
    ));
}}
