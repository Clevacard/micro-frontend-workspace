import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ControlContainer, FormControl, FormGroupDirective, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'lib-form-select',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './form-select.html',
  styleUrl: './form-select.css',
  standalone: true,
})
export class FormSelect {
 @Input() label!: string;
  @Input() controlName!: string;
  @Input() options!: Array<{ label: string; value: any }>;

  constructor(public parent: ControlContainer) {}

  get formGroup() {
    return (this.parent as FormGroupDirective).form;
  }

  get control(): FormControl {
    return this.formGroup.get(this.controlName) as FormControl;
  }
}
