import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListMedecinsComponent } from './list-medecins/list-medecins.component';
import { ListPrestatairesComponent } from './list-prestataires/list-prestataires.component';
import { ProfilComponent } from './profil/profil.component';

const routes: Routes = [
  {path:'medical', component:ListPrestatairesComponent},
  {path:'medecin', component:ListMedecinsComponent},
  {path:'profil', component:ProfilComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrestataireRoutingModule { }
