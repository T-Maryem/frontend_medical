import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrestataireRoutingModule } from './prestataire-routing.module';
import { ListPrestatairesComponent } from './list-prestataires/list-prestataires.component';
import { ListMedecinsComponent } from './list-medecins/list-medecins.component';
import { ProfilComponent } from './profil/profil.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListPrestatairesComponent,
    ListMedecinsComponent,
    ProfilComponent
  ],
  imports: [
    CommonModule,
    PrestataireRoutingModule, 
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PrestataireModule { }
