// import { loadRemoteModule } from '@angular-architects/module-federation';
// import { bootstrapApplication } from '@angular/platform-browser';
// import { createCustomElement } from '@angular/elements';
// import { App } from './app/app'; // fallback if needed for standalone bootstrap

// async function loadMicroApp() {
//   const m = await loadRemoteModule({
//     remoteName: 'microApp1',
//     exposedModule: './App'
//   });

//   // Remote App component
//   const RemoteApp = m.App;

//   // Bootstrap a temporary Angular application to get an injector
//   const appRef = await bootstrapApplication(RemoteApp);

//   // Create custom element with the real injector
//   const appElement = createCustomElement(RemoteApp, { injector: appRef.injector });
//   customElements.define('micro-app1', appElement);

//   // Append to DOM
//   const container = document.getElementById('micro-container');
//   if (container) {
//     container.appendChild(document.createElement('micro-app1'));
//   }
// }

// loadMicroApp().catch(err => console.error(err));
