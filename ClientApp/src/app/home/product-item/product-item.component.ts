import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../Models/product';

import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService) { }

  ngOnInit()  {
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Added to the cart!');
  }

}
