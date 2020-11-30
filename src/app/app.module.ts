import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import { CdkTableModule} from '@angular/cdk/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeadformComponent } from './leadform/leadform.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetailformComponent } from './detailform/detailform.component';
import { LeadstableComponent } from './leadstable/leadstable.component';
import {LeadsService} from './leads.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthComponent } from './auth/auth.component';
import { AuthService } from './auth.service';
import {TokenInterceptorService} from './token-interceptor.service';
@NgModule({
  declarations: [
    AppComponent,
    LeadformComponent,
    DetailformComponent,
    LeadstableComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatSelectModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    HttpClientModule,
    CdkTableModule,
  ],
  providers: [LeadsService, AuthService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
