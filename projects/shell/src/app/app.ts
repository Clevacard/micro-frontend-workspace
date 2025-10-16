import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component, ViewContainerRef, inject,ComponentFactoryResolver, Injector } from '@angular/core';
import { loadRemoteContainer } from '../../remote-loader'; 
import { Router, RouterModule } from '@angular/router';
import { AuthService } from './auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
 templateUrl: './app.html',
   styleUrls: ['./app.scss'],
   imports: [
    RouterModule,
    CommonModule
  ],
})
export class App {
  // private vc = inject(ViewContainerRef);
activeApp: string | null = null;

  constructor(
    private router: Router,
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    public vc: ViewContainerRef,
    private authService: AuthService) {}

  closeMicroApp() {
    this.activeApp = null;
    this.router.navigate(['/']); // back to dashboard
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
  
  navigateToLogin(): void {
    this.router.navigate(['/login']);
  }

  isIntroScreen(): boolean {
    return this.router.url === '/';
  }
}