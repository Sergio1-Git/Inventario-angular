import { Component, Input, OnInit } from '@angular/core';
import { ProductInterface } from 'src/app/interfaces/product-interface';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  constructor(private productService: ProductService) { }


  @Input() productos: ProductInterface = {
    id: 0,
    nombre: '',
    descripcion: '',
    precio: 0,
    cantidad: 0,
    total: 0,
  };

  @Input() indice: number = 0;


  ngOnInit(): void {
  }

  productChosen: ProductInterface = {
    id: 0,
    nombre: '',
    descripcion: '',
    cantidad: 0,
    precio: 0,
    total: 0,
  };

  getProducto(id: string) {
    this.productService.getProduct(id)
      .subscribe(data => {
        this.productChosen = data;
        console.log(data);

      });
  }

  eliminarProducto(): void {
    this.productService.delete(this.productos.id)
      .subscribe(() => {
        this.productService.getAllProducts().subscribe(
          response => this.productos = this.productos
        )
        location.reload();
      });
  }
}
