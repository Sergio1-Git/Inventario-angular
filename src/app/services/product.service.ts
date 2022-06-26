import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductInterface } from '../interfaces/product-interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:3000/products';

  constructor(private http: HttpClient) { }

  /**
   * @description Mediante el servicio, realizamos la petición get para obtener los datos
   * de cada objeto del backend JSON.
   */
  getAllProducts() {
    return this.http.get<ProductInterface[]>(this.apiUrl);
  }

  /**
   * @description Mediante esta función realizamos una petición a la api rest en ejecución
   * de enviar unos datos con el método POST, creando un nuevo objeto de este tipo con los
   * mismos atributos.
   */
  addNewProduct(nuevo: ProductInterface): Observable<ProductInterface[]> {
    return this.http.post<ProductInterface[]>(this.apiUrl, nuevo);
  }
}
