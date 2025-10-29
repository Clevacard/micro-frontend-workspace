// import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { CommonModule } from '@angular/common';
// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './app.html',
//   styleUrl: './app.scss'
// })
// export class App {
//   protected readonly title = signal('micro-app2');
// }

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import 'zone.js';
import { GiftCard } from './gift-card/gift-card';
import { Button } from '../../../shared-components/src/lib/components/button/button';
import { SharedCartService, CartItem } from '../../../shared-components/src/lib/api/shared-card.service'; 
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, GiftCard,Button,FormsModule],
   templateUrl: './app.html',
})
export class App {

   message = '';

   value: string = '';

colorValues: { [key: string]: number } = {
  red: 1000,
  blue: 2000,
  green: 3000
};

cartItems: CartItem[] = [];
 private channel = new BroadcastChannel('colorChannel');

constructor(private cartService: SharedCartService) {
   this.cartService.cartItems$.subscribe((items) => {
      this.cartItems = items;
      console.log('Cart updated in MFE B:', items);
    });
} 
//  private nextId = 0;

//   addItem() {
//     this.nextId++;
//     const newItem: CartItem = { id: this.nextId, name: `Product ${this.nextId}` };
//     this.cartService.addItem(newItem);
//     console.log('Item added from MFE A:', newItem);
//   }
  ngOnInit() {

//  window.addEventListener('product-added', this.handleEvent);

    // this.handleColorChange = this.handleColorChange.bind(this);
    // window.addEventListener('colorChange', this.handleColorChange);
    // window.dispatchEvent(new CustomEvent('colorChange', { detail: 'blue' }));
//  console.log('App2 initialized - setting up BroadcastChannel listener');
//   this.channel.onmessage = (event) => {
//     console.log('Received color via BroadcastChannel:', event.data);
//     const color = event.data;
//     console.log('Received color:', color);
//     if (color && this.colorValues[color] !== undefined) {
//       this.value = this.colorValues[color].toString();
//     } else {
//       this.value = 'Please select a color';
//     }
//   };
//  window.addEventListener('storage', (event) => {
//     const color = localStorage.getItem('selectedColor');
//     console.log('Received color via localStorage:', color);
//     if (color && this.colorValues[color] !== undefined) {
//       this.value = this.colorValues[color].toString();
//     } else {
//       this.value = 'Please select a color';
//     }
//   });
  }



  sendMessage() {
    const targetWindow = window.open('http://localhost:4202', '_blank');
    if (targetWindow) {
      targetWindow.postMessage({ source: 'app1', data: this.message }, 'http://localhost:4202');
      console.log('Message sent:', this.message);
    } else {
      console.warn('Target window not found.');
    }
  }

 handleEvent = (event: Event) => {
    const customEvent = event as CustomEvent;
    this.cartItems.push(customEvent.detail);
    console.log('Event received in MFE B:', customEvent.detail);
  };
  ngOnDestroy() {
    // window.removeEventListener('colorChange', this.handleColorChange);
      // this.channel.close();
      window.removeEventListener('product-added', this.handleEvent);
  }
  
  handleColorChange(event: any) {
    const customEvent = event as CustomEvent;
    const color = customEvent.detail;
    console.log('Received color:', color);
    if (color && this.colorValues[color] !== undefined) {
      this.value = this.colorValues[color].toString();
    } else {
      this.value = 'Please select a color';
    }
  }

  showHello() {
    this.message = 'Hello World!!!';
  }
}
