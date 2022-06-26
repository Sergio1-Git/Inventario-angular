import { Component, Input, OnInit } from '@angular/core';
import { ProductInterface } from 'src/app/interfaces/product-interface';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  constructor() { }


  @Input() productos: ProductInterface ={
      id: 0,
      nombre: '',
      descripcion: '',
      price: 0,
      cantidad: 0,
      total: 0,
    };



  ngOnInit(): void {
  }


}
