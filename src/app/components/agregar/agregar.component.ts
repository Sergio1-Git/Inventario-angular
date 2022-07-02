import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ProductInterface } from 'src/app/interfaces/product-interface';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  cantidad: number = 0;
  precio: number = 0;
  total: number = this.cantidad * this.precio;
  n: number = 120;
  productos: ProductInterface[] = [];

  public form!: FormGroup;

  constructor(private productService: ProductService, private formBuilder: FormBuilder, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      cantidad: [0, [Validators.required, Validators.min(1)]],
      precio: [0, [Validators.required, Validators.min(1)]],
      total: 0,
    });
  }
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
