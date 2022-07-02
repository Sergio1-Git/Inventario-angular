import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ProductInterface } from 'src/app/interfaces/product-interface';
import { ProductService } from 'src/app/services/product.service';
import { DialogComponent } from '../dialog/dialog.component';
import { jsPDF } from "jspdf";
import { ActivatedRoute, Router } from '@angular/router';
// import * as $ from 'jquery';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  cantidad!: number;
  precio!: number;
  total: number = this.cantidad * this.precio;
  n: number = 120;
  productos: ProductInterface[] = [];

  public form!: FormGroup;

  constructor(private productService: ProductService, private formBuilder: FormBuilder, public dialog: MatDialog, private router: Router, private activateRouter: ActivatedRoute) { }

  ngOnInit(): void {

    /**
     * @description Con esto obtenemos todos los datos de cada objeto que llamamos del fake backend listo para
     * consumir y mostrar en la interfaz de manera ordenada.
     */

    this.productService.getAllProducts()
      .subscribe(data => {
        this.productos = data;
      });

    /**
     * @description Método para inicializar nuestro formulario con campos vacios, mientras que valida los requisitos de cada campo
     */

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
     * al inventario que hace parte del backend, el cual la realiza al hacer
     * click en el botón añadir.
     */

  registrarProducto() {
    if (this.form.valid) {
      this.productService.addNewProduct(this.form.value)
        .subscribe(respuesta => {
          console.log('nuevo producto ', respuesta);
          this.openDialog();
        });
    } else {
      console.log('Nose registro');
    }
  }

  openDialog(): void {
    this.dialog.open(DialogComponent, {
      data: {
        animal: 'panda',
      },
    });
  }

  // generarPDF() {
  //   const doc = new jsPDF();
  //   doc.text('hello word', 10, 10);
  //   // doc.fromHTML($('#body').get(0), 15, 15);
  //   doc.save('lista.pdf');
  // }


  back(): void {
    this.router.navigate(['']);
  }
}
