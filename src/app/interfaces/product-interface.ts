
export interface ProductInterface {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  cantidad: number;
  total: number;
}

// export interface CreateProductDTO extends Omit<Product, 'id' | 'category'>{
//   categoryId: number;
// }

export interface UpdateProduct  extends Partial<ProductInterface>{

}
