import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdonnanceRoutingModule } from './ordonnance-routing.module';
import { ListOrdonnanceComponent } from './list-ordonnance/list-ordonnance.component';


@NgModule({
  declarations: [
    ListOrdonnanceComponent
  ],
  imports: [
    CommonModule,
    OrdonnanceRoutingModule
  ]
})
export class OrdonnanceModule { }
