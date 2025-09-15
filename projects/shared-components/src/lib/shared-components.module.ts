import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Button } from './components/button/button';


@NgModule({
  declarations: [],
  imports: [CommonModule,Button],
  exports: [Button],
})
export class SharedComponentsModule { }