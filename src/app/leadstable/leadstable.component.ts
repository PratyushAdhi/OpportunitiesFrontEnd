import { Component, OnInit } from '@angular/core';
import {Lead} from '../lead.model';
import {LeadsService} from '../leads.service';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';
import { CdkTableModule} from '@angular/cdk/table';
import {DatePipe} from '@angular/common';
import {DataSource} from '@angular/cdk/table';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


@Component({
  selector: 'app-leadstable',
  templateUrl: './leadstable.component.html',
  styleUrls: ['./leadstable.component.css'],
  providers: [DatePipe,]
})

export class LeadstableComponent implements OnInit {

  displayedColumns: string [] = [];
  lead_list = [];
  status_type : string;

  constructor(private leadApi: LeadsService, private http: HttpClient, private router: Router, private datePipe: DatePipe) { 
    this.status_type = "accepted";
    this.displayedColumns = ['name', 'activity','event_title','city', 'date_of_event'];
    this.getLeads();
  }

  ngOnInit(): void {
  }

  getLeads = () => {
    console.log(this.status_type);
    this.leadApi.getAllLeads(this.status_type).subscribe(
      data => {
        this.lead_list = data;
        for(var i = 0; i < this.lead_list.length; i++){
          var old_date = this.lead_list[i].date_of_event; 
          var date = this.datePipe.transform(old_date, "dd-MM-yyyy")
          console.log(date);
          this.lead_list[i].date_of_event = date;
        }
      },
      error => {
        console.log(error);
      }
    )
  }

  ToggleValue(){
    if(this.status_type === "pending"){
      return "Pending";
    }
    else if(this.status_type === "accepted"){
      return "Accepted";
    }
    else{
      return "Rejected";
    }
  }

  onToggleBtn(){
    console.log(this.status_type);
    this.getLeads();

  }

  onClick(id){
    console.log(id);
    this.router.navigate(["/" + "lead/" + id])

  }


  
  //displayedColumns: string[] = ['event_title', 'name', 'partner_type', 'city'];
  //displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  //dataSource = this.lead_list;

}
