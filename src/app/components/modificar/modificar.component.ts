import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductInterface, UpdateProduct } from 'src/app/interfaces/product-interface';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {

  cantidad: number = 0;
  precio: number = 0;
  total: number = this.cantidad * this.precio;
  n: number = 120;
  productos: ProductInterface[] = [];
  indice!: number;
  public form!: FormGroup;

  editOn = false;
  productChosen: ProductInterface = {
    id: 0,
    nombre: '',
    descripcion: '',
    cantidad: 0,
    precio: 0,
    total: 0,
  };

  constructor(private router: Router, private route: ActivatedRoute, private productService: ProductService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.indice = this.route.snapshot.params['id'];

    this.form = this.formBuilder.group({
      nombre: '',
      descripcion: [''],
      cantidad: [0],
      precio: [0],
      total: 0,
    });
    this.cargar();
  }

  cargar(): void {
    this.route.params.subscribe(
      e => {
        let id = e['id'];
        if (id) {
          this.productService.getProduct(id).subscribe(
            prod => this.productChosen = prod
          );
        }
      }
    );
  }

  modificarProducto() {

    const cambios: UpdateProduct = {

    }
    const id = this.productChosen.id;

    this.productService.updateProduct(id, this.form.value).subscribe(data => {
      const pIndice = this.productos.findIndex(item => item.id === this.productChosen.id);
      this.productos[pIndice] = data;
      this.productChosen = data;
      console.log(data);
      this.router.navigate(['/productos']);
    });

  }

}
