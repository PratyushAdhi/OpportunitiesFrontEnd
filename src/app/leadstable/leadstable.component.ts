import { Component, OnInit } from '@angular/core';
import {Lead} from '../lead.model';
import {LeadsService} from '../leads.service';
import { HttpClient } from '@angular/common/http';
import { CdkTableModule} from '@angular/cdk/table';
import {DataSource} from '@angular/cdk/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


@Component({
  selector: 'app-leadstable',
  templateUrl: './leadstable.component.html',
  styleUrls: ['./leadstable.component.css']
})

export class LeadstableComponent implements OnInit {

  dataSource = [];

  
  ELEMENT_DATA: PeriodicElement[] = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  ];

  lead_list = [];

  constructor(private leadApi: LeadsService, http: HttpClient) {
    this.getLeads();
   }

  ngOnInit(): void {
  }

  getLeads = () => {
    this.leadApi.getAllLeads().subscribe(
      data => {
        this.lead_list = data;
        this.dataSource = data;
        console.log(this.lead_list);
      },
      error => {
        console.log(error);
      }
    )
  }
  
  displayedColumns: string[] = ['name', 'city', 'email'];
  //displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

}
