import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Button } from './components/button/button';
import { DynamicForm } from './components/dynamic-form/dynamic-form';
import { FormSelect } from './components/form-select/form-select';
import { FormInput } from './components/form-input/form-input';


@NgModule({
  declarations: [],
  imports: [CommonModule,Button,DynamicForm,FormSelect,FormInput],
  exports: [Button,DynamicForm,FormSelect,FormInput],
})
export class SharedComponentsModule { }