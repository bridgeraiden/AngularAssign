import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Product } from './Models/product';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  getProducts() {
    return this.http.get<Product[]>(this.baseUrl + 'products');
  }
}
