import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface CartItem {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class SharedCartService {
  private cartItems = new BehaviorSubject<CartItem[]>([]);
  cartItems$ = this.cartItems.asObservable();

  addItem(item: CartItem): void {
    const currentItems = this.cartItems.value;
    this.cartItems.next([...currentItems, item]);
  }
}
