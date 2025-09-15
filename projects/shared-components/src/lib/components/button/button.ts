import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  // selector: 'shared-button',
  // imports: [],
  // templateUrl: './button.html',
  // styleUrl: './button.css'

  selector: 'shared-button',
  templateUrl: './button.html',
  styleUrls: ['./button.css'],
  standalone: true,
})
export class Button {
 @Input() label: string = 'Click me';
  @Output() clicked = new EventEmitter<void>();

  onClick() {
    this.clicked.emit(); // ✅ tell parent that button was clicked
  }
}
