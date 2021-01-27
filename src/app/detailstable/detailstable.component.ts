// import { Component, OnInit,  EventEmitter, NgZone } from '@angular/core';
// import {DetailserviceService} from '../detailservice.service';
// import {HttpClient, HttpHeaders} from '@angular/common/http';
// import {Router} from '@angular/router';
// import { ChangeDetectorRef } from '@angular/core';

// @Component({
//   selector: 'app-detailstable',
//   templateUrl: './detailstable.component.html',
//   styleUrls: ['./detailstable.component.css']
// })
// export class DetailstableComponent implements OnInit {

//   token = localStorage.getItem('token');
//   httpHeaders = new HttpHeaders({
//     'Content-type': 'application/json',
//     'Authorization': `Token: ${this.token}`
//   });

//   lead_list = [];
//   status_type : string;

//   constructor(private DetailApi: DetailserviceService, 
//     private http: HttpClient, 
//     private router: Router,
//     private ngZone: NgZone,
//     private readonly cd: ChangeDetectorRef) { 
//     this.status_type = "published";
//   }

//   ngOnInit(): void {
//     this.getLeads();
//   }

//   getLeads = () => {
//     console.log(this.status_type);
//     setTimeout(() => this.DetailApi.getAllDetails(this.status_type).subscribe(
//       data => {
//         this.lead_list = data;
//         // this.ngZone.run(() => {
//         //   this.lead_list = data;
//         // 
//       },
//       error => {
//         console.log(error);
//       }

//     ), 0);
//     // this.DetailApi.getAllDetails(this.status_type).subscribe(
//     //   data => {
//     //     this.lead_list = data;
//     //     this.cd.detectChanges();
//     //     console.log(data);
//     //     // this.ngZone.run(() => {
//     //     //   this.lead_list = data;
//     //     // 
//     //   },
//     //   error => {
//     //     console.log(error);
//     //   }
//     // )
//   }

//   togglePublishValue = (id) => {
//     this.http.post("http://127.0.0.1:8000/details/toggle/" + id + "/",{
//       headers: this.httpHeaders
//     }).subscribe(
//       (data) => console.log(data)
//     )
//     this.getLeads();

//   }

//   showPublished(){
//     return this.status_type === "published";
//   }

//   showUnpublished(){
//     return this.status_type === "unpublished";
//   }

//   showUnverified(){
//     return this.status_type === "unverified";
//   }

//   ToggleValue(){
//     if(this.status_type === "published"){
//       return "Published";
//     }
//     else if(this.status_type === "unpublished"){
//       return "Unpublished";
//     }
//     else{
//       return "Pending";
//     }
//   }

//   onToggleBtn(){
//     this.getLeads();
//     console.log(this.status_type);
//   }

//   onClick(id){
//     console.log(id);
//     this.router.navigate(["/" + "detail-form/" + id])

//   }

// }
