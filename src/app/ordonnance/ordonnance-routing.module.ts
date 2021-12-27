import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListOrdonnanceComponent } from './list-ordonnance/list-ordonnance.component';

const routes: Routes = [
  {path:'all', component:ListOrdonnanceComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdonnanceRoutingModule { }
