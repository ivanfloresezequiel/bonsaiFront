import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  Nuevo(){
    
    this.router.navigate(["categorias/nuevo"]);
  }
}
