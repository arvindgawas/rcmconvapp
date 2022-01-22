import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LatlongComponent } from './latlong.component';

const routes: Routes = [{ path: '', component: LatlongComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LatlongRoutingModule { }
