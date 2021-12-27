import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfilComponent } from './prestataire/profil/profil.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'register', component:RegisterComponent},
  {path:'login', component:LoginComponent},  
  {path:'rdv', loadChildren: () => import('./rendez-vous/rendez-vous.module').then(m => m.RendezVousModule)},
  {path:'prestataire', loadChildren: () => import('./prestataire/prestataire.module').then(m => m.PrestataireModule)},
  {path:'patient', loadChildren: () => import('./patients/patients.module').then(m => m.PatientsModule)},
  {path:'patient', loadChildren: () => import('./patients/patients.module').then(m => m.PatientsModule)},
  {path:'ordonnance', loadChildren: () => import('./ordonnance/ordonnance.module').then(m => m.OrdonnanceModule)},
  {path:'message', loadChildren: () => import('./messages/messages.module').then(m => m.MessagesModule)},
  {path:'consultation', loadChildren: () => import('./consultation/consultation.module').then(m => m.ConsultationModule)},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
