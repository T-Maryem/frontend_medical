import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemandeRdvComponent } from './demande-rdv/demande-rdv.component';
import { ListDemandesComponent } from './list-demandes/list-demandes.component';
import { ListRdvComponent } from './list-rdv/list-rdv.component';

const routes: Routes = [
  {path:'demande', component:DemandeRdvComponent},
  {path:'all', component:ListRdvComponent},
  {path:'dmds', component:ListDemandesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RendezVousRoutingModule { }
