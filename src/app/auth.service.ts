import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  loginUser(userData): Observable<any> {
    return this.http.post('http://127.0.0.1:8000/auth/login/', userData)
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
