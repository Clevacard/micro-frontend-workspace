import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

export const routes: Routes = [
  {
    path: 'app1',
    loadComponent: () =>
      loadRemoteModule({
        remoteName: 'microApp1',
        exposedModule: './App'
      }).then(m => m.App)
  },
  // {
  //   path: 'app2',
  //   loadChildren: () =>
  //     loadRemoteModule({
  //       remoteName: 'microApp2',
  //       exposedModule: './MicroApp2Module'
  //     }).then(m => m.MicroApp2Module)
  // },
  // {
  //   path: 'app3',
  //   loadChildren: () =>
  //     loadRemoteModule({
  //       remoteName: 'microApp3',
  //       exposedModule: './MicroApp3Module'
  //     }).then(m => m.MicroApp3Module)
  // },
  { path: '', redirectTo: 'app1', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}