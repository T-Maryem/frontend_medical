import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { ShowConsultationComponent } from './show-consultation/show-consultation.component';

const routes: Routes = [
  {path:'show/:id', component:ShowConsultationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultationRoutingModule { }
