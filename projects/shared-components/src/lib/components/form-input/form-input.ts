import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ControlContainer, FormControl, FormGroupDirective } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'lib-form-input',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './form-input.html',
  styleUrl: './form-input.css',
  standalone: true,
})
export class FormInput {
 @Input() label!: string;
  @Input() controlName!: string;
  @Input() placeholder: string = '';

  constructor(public parent: ControlContainer) {}

  get formGroup() {
    return (this.parent as FormGroupDirective).form;
  }

  get control(): FormControl {
    return this.formGroup.get(this.controlName) as FormControl;
  }
}
