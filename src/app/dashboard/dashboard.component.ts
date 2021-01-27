import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { RouterModule } from '@angular/router';
import {DashboardserviceService} from '../dashboardservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // leads = []

  leads = [
   {
     id: 0, 
     image: "https://img.apmcdn.org/4f25ecdbbd7af5fed833153302515a94c990de11/uncropped/0a0f13-20130508-favorite-album-covers.jpg",
     title: "One",
     artist: "Artist",
     created_date: "23/12/2020",
     last_date_application: "01/12/2021",
     time: "8:00 PM",
     status: "Closed",
     result: "Pending",
     is_liked: false,
     is_winner: false,
   },
   {
    id: 1, 
    image: "https://img.apmcdn.org/4f25ecdbbd7af5fed833153302515a94c990de11/uncropped/0a0f13-20130508-favorite-album-covers.jpg",
    title: "One",
    artist: "Artist",
    created_date: "23/12/2020",
    last_date_application: "01/12/2021",
    time: "8:00 PM",
    status: "Open",
    result: "Declared",
    is_liked: false,
    is_winner: false,
  },
  {
    id: 2, 
    image: "https://img.apmcdn.org/4f25ecdbbd7af5fed833153302515a94c990de11/uncropped/0a0f13-20130508-favorite-album-covers.jpg",
    title: "One",
    artist: "Artist",
    created_date: "23/12/2020",
    last_date_application: "01/12/2021",
    time: "8:00 PM",
    status: "Open",
    result: "Declared",
    is_liked: false,
    is_winner: false,
  },
  ]

  constructor(public api: DashboardserviceService, public router: Router) { }

  ngOnInit(): void {
    //this.getList();
    console.log(this.leads);
  }

  redirect = () => {
    this.router.navigate(["./submission"]);
  }

  // getList = () => {
  //   this.api.getOpportunityList().subscribe(
  //     data => {
  //       console.log(data);
  //       this.leads = data;
  //       const date = new Date();
  //       for(var i = 0; i < this.leads.length; i++){
  //         if (this.leads[i].last_date_application < date){
  //           this.leads[i].status = "Closed";
  //         }
  //         else{
  //           this.leads[i].status = "Open";
  //         }
  //       }
  //     },
  //     error => {
  //       console.log(error)
  //     }
  //   )
  // }

}
