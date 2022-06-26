import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductInterface } from 'src/app/interfaces/product-interface';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  cantidad: number = 0;
  precio: number = 0;
  total: number = this.cantidad * this.precio;

  productos: ProductInterface[] = [];

  public form!: FormGroup;

  constructor(private productService: ProductService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.productService.getAllProducts()
      .subscribe(data => {
        this.productos = data;
      });

    this.form = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      cantidad: [0, [Validators.required, Validators.min(1)]],
      precio: [0, [Validators.required, Validators.min(1)]],
      total: 0,
    });

  }

  /**
     * @description Esta función ejecuta la acción de registrar un producto
     * al inventario, al hacer click en el botón añadir.
     */

  registrarProducto() {
    if (this.form.valid) {
      this.productService.addNewProduct(this.form.value)
        .subscribe(respuesta => {
          console.log('nuevo producto ', respuesta);
        });
    } else {
      console.log('Nose registro');

    }
  }

}
