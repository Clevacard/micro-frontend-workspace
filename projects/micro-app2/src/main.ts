import 'zone.js';

// Define your container object with init and other methods
const container = {
  init: (sharedScope?: any) => Promise.resolve(),
  // Add other methods if necessary
};

// Assign to window
(window as any)['microApp2'] = container;

console.log('microApp2 container assigned to window');
import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import 'zone.js';  

bootstrapApplication(App)
  .catch((err) => console.error(err));


