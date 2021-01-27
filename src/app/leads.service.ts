import { Injectable , Injector} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import {Lead} from './lead.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LeadsService {

  base_url = "http://127.0.0.1:8000/leads/"
  rejected_url = "http://127.0.0.1:8000/leads/rejected/"
  pending_url = "http://127.0.0.1:8000/leads/pending/"
  accepted_url = "http://127.0.0.1:8000/leads/accepted/"
  create_url = this.base_url + 'create/'
  token = localStorage.getItem('token')
  httpHeaders = new HttpHeaders({
    'Content-type': 'application/json',
    'Authorization': `Token: ${this.token}`
  });

  constructor(private http: HttpClient, private injector: Injector) {};

  getAllLeads(status_type): Observable<any> {
    if(status_type === "accepted"){
      return this.http.get(this.accepted_url, {
        headers: this.httpHeaders
      })
    }
    else if(status_type === "pending"){
      return this.http.get(this.pending_url, {
        headers: this.httpHeaders
      })
    }
    else {
      return this.http.get(this.rejected_url,{
        headers: this.httpHeaders
      })
    }
  }

  getLead(id): Observable<any> {
    return this.http.get(this.base_url + id, {
      headers: this.httpHeaders
    });
  }

  postLead(leadData): Observable<any> {
    return this.http.post(this.create_url, leadData, {headers: this.httpHeaders}); 
  }


}
