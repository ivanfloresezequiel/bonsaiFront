import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'BonsaiFrontend';
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  Producto(){
      this.router.navigate([("productos")]);
  }
  Categoria(){
    this.router.navigate([("categorias")]);
  }
  Proveedor(){
    this.router.navigate([("proveedor")]);
  }
}
