import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

import { FormField } from '../../models/form-field.models';
import { FormInput } from '../form-input/form-input';
import { FormSelect } from '../form-select/form-select';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-dynamic-form',
  imports: [ReactiveFormsModule,CommonModule,FormInput,FormSelect],
  templateUrl: './dynamic-form.html',
  styleUrl: './dynamic-form.css',
  standalone: true,
})
export class DynamicForm {
@Input() formFields: FormField[] = [];
  @Input() form!: FormGroup;

  ngOnInit() {
    this.formFields.forEach(field => {
      if (!this.form.contains(field.name)) {
        this.form.addControl(
          field.name,
          new FormControl(field.defaultValue || '', field.validators || [])
        );
      }
    });
  }
}
