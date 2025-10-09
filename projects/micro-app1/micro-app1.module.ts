import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { App } from './src/app/app';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forChild([
      { path: '', component: App }  // default route
    ])
  ]
})
export class MicroApp1Module {}
