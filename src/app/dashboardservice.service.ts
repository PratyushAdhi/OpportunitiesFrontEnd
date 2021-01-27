import { Injectable, Injector } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardserviceService {

  token = localStorage.getItem('token');
  // httpHeaders = new HttpHeaders()
  httpHeaderNormal = new HttpHeaders({
    'Content-Type': 'application/json',
    // 'Content-Disposition'
    'Accept': 'application/json',
    'Authorization': `Token: ${this.token}`
  })

  base_url = "http://127.0.0.1:8000/opportunity/"

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute, private injector: Injector) { }

  getOpportunityList(): Observable<any> {
    console.log(this.httpHeaderNormal);
    return this.http.get(this.base_url);
  }

}
