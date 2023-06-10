import { Injectable } from '@angular/core';
import { FlavorComponent } from './flavor/flavor.component';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: FlavorComponent[] = [];

  constructor() { }

  addToCart(item: FlavorComponent) {
    this.cartItems.push(item);
  }

  removeFromCart(item: FlavorComponent) {
    const index = this.cartItems.indexOf(item);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
    }
  }

  getCartItems() {
    return this.cartItems;
  }
}
