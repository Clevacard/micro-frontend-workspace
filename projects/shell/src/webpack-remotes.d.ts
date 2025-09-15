declare module 'microApp2/App' {
  import { Type } from '@angular/core';

  export const App: Type<any>; // or specify a more precise type
}

// At the top of your file
declare module 'microApp1/App' {
   import { Type } from '@angular/core';

  export const App: Type<any>; // or specify a more precise type
}

declare module 'microApp3/App' {
   import { Type } from '@angular/core';

  export const App: Type<any>; // or specify a more precise type
}
