import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { LatlongreportRoutingModule } from './latlongreport-routing.module';
import { LatlongreportComponent } from './latlongreport.component';


@NgModule({
  declarations: [
    LatlongreportComponent
  ],
  imports: [
    CommonModule,
    LatlongreportRoutingModule,
    FormsModule
  ]
})
export class LatlongreportModule { }
