import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Product } from '../../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private URL = `${environment.BaseURL}/products`;
  constructor(private http: HttpClient) {}

  getAllProduct(){
    return this.http.get<Product[]>(this.URL);
  }

  getAllCategories(){
    return this.http.get<string[]>(`${this.URL}/categories`);
  }

  addProduct(newProduct: Product){
    return this.http.post(this.URL, newProduct);
  }

  getProductById(id: string){
    return this.http.get<Product>(`${this.URL}/${id}`);
  }

  updateProduct(updatedProduct: Product){
    return this.http.put(`${this.URL}/${updatedProduct.id}`, updatedProduct);
  }

  deleteProduct(id: string){
    return this.http.delete(`${this.URL}/${id}`);
  }

}
