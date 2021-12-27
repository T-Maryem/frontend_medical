import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RendezVousRoutingModule } from './rendez-vous-routing.module';
import { DemandeRdvComponent } from './demande-rdv/demande-rdv.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListRdvComponent } from './list-rdv/list-rdv.component';
import { ListDemandesComponent } from './list-demandes/list-demandes.component';


@NgModule({
  declarations: [
    DemandeRdvComponent,
    ListRdvComponent,
    ListDemandesComponent
  ],
  imports: [
    CommonModule,
    RendezVousRoutingModule, 
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class RendezVousModule { }
