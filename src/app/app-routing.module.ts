import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailformComponent } from './detailform/detailform.component';
import { LeadformComponent } from './leadform/leadform.component';
import { LeadretrieveComponent } from './leadretrieve/leadretrieve.component';
import { LeadstableComponent } from './leadstable/leadstable.component';
import { SubmissionComponent } from './submission/submission.component';
import { WinnersboardComponent } from './winnersboard/winnersboard.component';
//import {DetailstableComponent} from './detailstable/detailstable.component';

const routes: Routes = [
  {
    path: 'winners',
    component: WinnersboardComponent
  },
  {
    path: 'submission',
    component: SubmissionComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent 
  },
  {
  path: 'leads/create',
  component: LeadformComponent 
  },
  {
    path: 'details/:id',
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
  {
    path: "lead/:id",
    component: LeadretrieveComponent
  },
  // {
  //   path: "detail-table",
  //   component: DetailstableComponent,
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
