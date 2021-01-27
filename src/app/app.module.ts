import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import { CdkTableModule} from '@angular/cdk/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeadformComponent } from './leadform/leadform.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { DetailformComponent } from './detailform/detailform.component';
import { LeadstableComponent } from './leadstable/leadstable.component';
import { MatNativeDateModule } from '@angular/material/core';
import {LeadsService} from './leads.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthComponent } from './auth/auth.component';
import {MatDialogModule} from '@angular/material/dialog';
import { AuthService } from './auth.service';
import {TokenInterceptorService} from './token-interceptor.service';
import {MatCardModule} from '@angular/material/card';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import { LeadretrieveComponent } from './leadretrieve/leadretrieve.component';
import { NavComponent } from './nav/nav.component';
// import { DetailstableComponent } from './detailstable/detailstable.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SubmissionComponent } from './submission/submission.component';
import { WinnersboardComponent } from './winnersboard/winnersboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LeadformComponent,
    DetailformComponent,
    LeadstableComponent,
    AuthComponent,
    LeadretrieveComponent,
    NavComponent,
    SidebarComponent,
    DashboardComponent,
    SubmissionComponent,
    WinnersboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    MatSelectModule,
    MatRadioModule,
    MatIconModule,
    MatDividerModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    HttpClientModule,
    CdkTableModule,
    MatCardModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    MatRadioModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatSidenavModule,
    MatIconModule,
    FlexLayoutModule,
    MatDialogModule,
  ],
  providers: [LeadsService, AuthService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  },
],
  bootstrap: [AppComponent]
})
export class AppModule { }
