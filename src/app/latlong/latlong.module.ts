import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { MatTableModule, } from '@angular/material/table';
import { MatAutocomplete, MatAutocompleteModule } from '@angular/material/autocomplete';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
 import {MatRadioModule} from '@angular/material/radio';
 import { MatInputModule } from '@angular/material/input';
import { LatlongRoutingModule } from './latlong-routing.module';
import { LatlongComponent } from './latlong.component';


@NgModule({
  declarations: [
    LatlongComponent
  ],
  imports: [
    CommonModule,
    LatlongRoutingModule,
    FormsModule,
    MatRadioModule,
    MatTableModule,
    MatAutocompleteModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,

  ]
})
export class LatlongModule { }
