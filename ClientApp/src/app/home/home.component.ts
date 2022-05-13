import { Component } from '@angular/core';
import { Product } from '../Models/product';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  products: Product[] = [];

  constructor(private shoppingService: ShoppingService) {
    this.shoppingService.getProducts().subscribe(result => {
      this.products = result;
      console.log(result);
    })
  }
}
