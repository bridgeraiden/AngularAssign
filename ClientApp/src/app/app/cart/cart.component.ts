import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class Cart implements OnInit {

  constructor(private cartService: CartService) { }

  add(product) {
    this.cartService.add(product)

    ngOnInit() {
      this.products = this.cartService.getProducts()
  }

}
