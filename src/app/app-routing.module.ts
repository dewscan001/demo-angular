import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'helloworld', loadChildren: () => import('./helloworld/helloworld.module').then(m => m.HelloworldModule) },
  { path: 'angular', loadChildren: () => import('./angular/angular.module').then(m => m.AngularModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
