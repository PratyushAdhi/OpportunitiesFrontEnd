import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { DetailformComponent } from './detailform/detailform.component';
import { LeadformComponent } from './leadform/leadform.component';
import { LeadstableComponent } from './leadstable/leadstable.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/lead-form',
    pathMatch: 'full'
  },
  {
  path: 'lead-form',
  component: LeadformComponent 
  },
  {
    path: 'detail-form/:id',
    component: DetailformComponent
  },
  {
    path: 'login',
    component: AuthComponent
  },
  {
    path: 'lead-table',
    component: LeadstableComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
