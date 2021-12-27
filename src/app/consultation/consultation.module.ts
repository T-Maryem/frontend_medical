import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultationRoutingModule } from './consultation-routing.module'; 
import { ShowConsultationComponent } from './show-consultation/show-consultation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ 
    ShowConsultationComponent
  ],
  imports: [
    CommonModule,
    ConsultationRoutingModule, 
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class ConsultationModule { }
