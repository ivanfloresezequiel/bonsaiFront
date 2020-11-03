import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  Nuevo(){
    
    this.router.navigate(["productos/nuevo"]);
  }
}
