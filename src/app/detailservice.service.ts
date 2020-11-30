import { Injectable , Injector} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class DetailserviceService {
  id : ""
  base_url = "http://127.0.0.1:8000/details/"
  create_url = this.base_url + 'create/'
  token = localStorage.getItem('token')
  httpHeaders = new HttpHeaders({
    'Content-type': 'application/json',
    'Authorization': `Token: ${this.token}`
  });

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute, private injector: Injector) { };

  getDetail(id: number): Observable<any> {
    console.log(id);
    return this.http.get(this.base_url + id + "/", {
      headers: this.httpHeaders
    })
  }

  updateDetail(detail, id): Observable<any> {
    return this.http.put(this.base_url + id + "/", detail, {
      headers: this.httpHeaders
    })
  }
}
