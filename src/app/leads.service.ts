import { Injectable , Injector} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class LeadsService {

  base_url = "http://127.0.0.1:8000/leads/"
  create_url = this.base_url + 'create/'
  token = localStorage.getItem('token')
  httpHeaders = new HttpHeaders({
    'Content-type': 'application/json',
    'Authorization': `Token: ${this.token}`
  });

  constructor(private http: HttpClient, private injector: Injector) {};

  getAllLeads(): Observable<any> {
    return this.http.get(this.base_url, {
      headers: this.httpHeaders
    });
  }

  postLead(leadData): Observable<any> {
    return this.http.post(this.create_url, leadData, {headers: this.httpHeaders}); 
  }

}
