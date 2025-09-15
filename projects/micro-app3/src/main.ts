
import 'zone.js';

// Define your container object with init and other methods
const container = {
  init: (sharedScope?: any) => Promise.resolve(),
  // Add other methods if necessary
};

// Assign to window
(window as any)['microApp3'] = container;

console.log('microApp3 container assigned to window');
import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';

bootstrapApplication(App)
  .catch((err) => console.error(err));
