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
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, GiftCard,Button],
   templateUrl: './app.html',
})
export class App {

   message = '';

  showHello() {
    this.message = 'Hello World!!!';
  }
}
