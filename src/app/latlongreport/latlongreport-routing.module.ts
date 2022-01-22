import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LatlongreportComponent } from './latlongreport.component';

const routes: Routes = [{ path: '', component: LatlongreportComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LatlongreportRoutingModule { }
