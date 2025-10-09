
import { CommonModule } from '@angular/common';
import 'zone.js';
import { Component, signal,ViewChild, ViewContainerRef, Compiler, Injector, NgModuleRef } from '@angular/core';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormInput } from '../../../shared-components/src/lib/components/form-input/form-input';
import { DynamicForm } from '../../../shared-components/src/lib/components/dynamic-form/dynamic-form';
import { FormField } from '../../../shared-components/src/lib/models/form-field.models';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,DynamicForm,ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('micro-app3');
  @ViewChild('vc', { read: ViewContainerRef, static: true }) vc!: ViewContainerRef;

  constructor(private injector: Injector, private compiler: Compiler) {}

formGroup = new FormGroup({});
myForm = new FormGroup({});
 fields: FormField[] = [
  {
    type: 'input', // or 'select', etc.
    label: 'Username',
    name: 'username',
    defaultValue: '',
    validators: [],
  },
  {
    type: 'input',
    label: 'Password',
    name: 'password',
    defaultValue: '',
    validators: [],
  },
   {
      type: 'select',
      label: 'Country',
      name: 'country',
      options: [
        { label: 'United States', value: 'US' },
        { label: 'India', value: 'IN' }
      ],
      validators: [Validators.required]
    }
  // add more fields as needed
];
  
  formConfig: any[] = [
    {
      type: 'input',
      label: 'Full Name',
      name: 'fullName',
      placeholder: 'Enter your full name',
      validators: [Validators.required]
    },
    {
      type: 'select',
      label: 'Country',
      name: 'country',
      options: [
        { label: 'United States', value: 'US' },
        { label: 'India', value: 'IN' }
      ],
      validators: [Validators.required]
    }
  ];

  onSubmit() {
    if (this.formGroup.valid) {
      console.log('Form values:', this.formGroup.value);
    } else {
      console.log('Form invalid');
    }
  }



  async loadSharedComponent() {
    const remoteModule = await loadRemoteModule({
      remoteName: 'microApp2',
      exposedModule: './App',
    });

    // remoteModule is the component class or module
    const componentType = remoteModule.App;

    // Create component dynamically
    this.vc.clear();

    // If the remote module is a component directly:
    this.vc.createComponent(componentType);

    // Alternatively, if the remote exposes a module:
    // const moduleRef = await this.compiler.compileModuleAsync(remoteModule.SharedModule);
    // const factory = moduleRef.componentFactoryResolver.resolveComponentFactory(remoteModule.SharedComponent);
    // this.vc.createComponent(factory);
  }
}
