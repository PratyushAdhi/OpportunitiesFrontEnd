import { Component, OnInit } from '@angular/core';
import {User} from '../user.model';
import {AuthService} from '../auth.service';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  user = new User();
  
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.user.username = "";
    this.user.password = "";
  }

  onLogin(){
    this.authService.loginUser(this.user).subscribe(
      response => {
        console.log(response);
        localStorage.setItem('token', response.token);
        alert("User" + this.user.username + "logged in");
      },
      error => {
        console.log(error);
      }
    )
  }

}
