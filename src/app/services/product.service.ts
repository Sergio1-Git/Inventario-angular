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

  getAllProducts() {
    return this.http.get<ProductInterface[]>(this.apiUrl);
  }

  addNewProduct(nuevo: ProductInterface): Observable<ProductInterface[]> {
    return this.http.post<ProductInterface[]>(this.apiUrl,nuevo);
  }

  // public get(url: string) {
  //   return this.http.get(url);
  // }
}
