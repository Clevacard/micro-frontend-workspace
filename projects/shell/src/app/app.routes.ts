import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { Login } from './login/login';
import { App } from './app';
import { Dashboard } from './dashboard/dashboard';

export const routes: Routes = [
   {
    path: 'microApp1',
    loadComponent: () =>
      loadRemoteModule({
        remoteName: 'microApp1',
        exposedModule: './App2',
        remoteEntry: 'http://localhost:4201/remoteEntry.js'
      }).then(m => m.App)
   },
  { path: 'dashboard',  component: Dashboard},
  { path: 'login', component: Login},
  { path: '', component: App, pathMatch: 'full' },
   { path: '**', redirectTo: '' } ,
  // {
  //   path: 'app1',
  //   loadComponent: () =>
  //     loadRemoteModule({
  //       remoteName: 'microApp1',
  //       exposedModule: './App'
  //     }).then(m => m.App)
  // },
  {
    path: 'app2',
    loadChildren: () =>
      loadRemoteModule({
        remoteName: 'microApp2',
        exposedModule: './MicroApp2Module'
      }).then(m => m.MicroApp2Module)
  },
  // {
  //   path: 'app3',
  //   loadChildren: () =>
  //     loadRemoteModule({
  //       remoteName: 'microApp3',
  //       exposedModule: './MicroApp3Module'
  //     }).then(m => m.MicroApp3Module)
  // },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}