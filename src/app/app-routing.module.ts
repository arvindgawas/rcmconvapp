import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'latlong', loadChildren: () => import('./latlong/latlong.module').then(m => m.LatlongModule) },
  { path: 'latlongreport', loadChildren: () => import('./latlongreport/latlongreport.module').then(m => m.LatlongreportModule) },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
