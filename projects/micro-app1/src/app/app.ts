import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormInput } from '../../../shared-components/src/lib/components/form-input/form-input';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,FormInput], 
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  message = 'Hello from Micro App 1!';
   form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: [''],
      email: [''],
    });
  }

  
}