import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component, ViewContainerRef, inject,ComponentFactoryResolver } from '@angular/core';
import { loadRemoteContainer } from '../../remote-loader'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
 templateUrl: './app.html',
   styleUrls: ['./app.scss']
})
export class App {
  // private vc = inject(ViewContainerRef);
activeApp: string | null = null;

  constructor(private router: Router,private componentFactoryResolver: ComponentFactoryResolver,
  public vc: ViewContainerRef) {}

  loadMicroApp(appName: string) {
    this.activeApp = appName;
    if(appName=='microApp2'){
      this.loadMicroApp2();
    }
    else if(appName=='microApp1'){
       this.router.navigate([appName])
      this.loadMicroApp1();
    }

    else if(appName=='microApp3'){
      this.loadMicroApp3();
    }
    
  }

  closeMicroApp() {
    this.activeApp = null;
    this.router.navigate(['/']); // back to dashboard
  }

  async loadMicroApp2() {
    try {
      // Load the remote entry script
      await loadRemoteContainer('microApp2', 'http://localhost:4202/remoteEntry.js');

      // Import the exposed App component
      const { App: RemoteApp } = await import('microApp2/App');

      // Clear previous component and create new one
      this.vc.clear();
      this.vc.createComponent(RemoteApp);
    } catch (err) {
      console.error('Error loading micro2 app:', err);
    }
  }


   async loadMicroApp1() {
    try {
      await loadRemoteContainer('microApp1', 'http://localhost:4201/remoteEntry.js');
      const { App: RemoteApp } = await import('microApp1/App');
      this.vc.clear();
      this.vc.createComponent(RemoteApp);
    } catch (err) {
      console.error('Error loading micro1 app:', err);
    }
  }

//   async loadMicroApp1() {
//   try {
//     // Load the remote container
//     await loadRemoteContainer('microApp1', 'http://localhost:4201/remoteEntry.js');

//     // Load the remote module
//     const remoteModule = await loadRemoteModule({
//       remoteName: 'microApp1',
//       exposedModule: './MicroApp1Module', // path to the module
//     });

//     // Resolve component factory and create component
//     this.vc.clear();
//     const factory = this.componentFactoryResolver.resolveComponentFactory(remoteModule);
//     this.vc.createComponent(factory);
//   } catch (err) {
//     console.error('Error loading micro1 app:', err);
//   }
// }



    async loadMicroApp3() {
    try {
      await loadRemoteContainer('microApp3', 'http://localhost:4203/remoteEntry.js');
      const { App: RemoteApp } = await import('microApp3/App');
      this.vc.clear();
      this.vc.createComponent(RemoteApp);
    } catch (err) {
      console.error('Error loading micro3 app:', err);
    }
  }

  
}