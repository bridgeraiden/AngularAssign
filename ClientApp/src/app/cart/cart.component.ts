import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items = this.cartService.getItems();
    checkoutForm: any;


  constructor(
      private cartService: CartService,
      
    ) { }

  ngOnInit() {
    }


  clearCart() {
      this. items = this.cartService.clearCart();
      window.alert('Removed from cart!');
    }

    onSubmit(): void {
      this.items = this.cartService.clearCart();
      window.alert('Your order has been submitted');
      this.checkoutForm.reset();

    }
  }
