import {OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-submission',
  templateUrl: './submission.component.html',
  styleUrls: ['./submission.component.css']
})
export class SubmissionComponent implements OnInit {

  leads = [
    {
      id: 0, 
      image: "https://img.apmcdn.org/4f25ecdbbd7af5fed833153302515a94c990de11/uncropped/0a0f13-20130508-favorite-album-covers.jpg",
      title: "One",
      artist: "Artist",
      date: "23/12/2020",
      time: "8:00 PM",
      is_liked: false,
      is_winner: false,
    },
    {
      id: 0, 
      image: "https://img.apmcdn.org/4f25ecdbbd7af5fed833153302515a94c990de11/uncropped/0a0f13-20130508-favorite-album-covers.jpg",
      title: "One",
      artist: "Artist",
      date: "23/12/2020",
      time: "8:00 PM",
    //   is_liked: "",
    // is_winner: "blue",
      is_liked: false,
      is_winner: false,
    },
    {
      id: 0, 
      image: "https://img.apmcdn.org/4f25ecdbbd7af5fed833153302515a94c990de11/uncropped/0a0f13-20130508-favorite-album-covers.jpg",
      title: "One",
      artist: "Artist",
      date: "23/12/2020",
      time: "8:00 PM",
      // is_liked: "",
      // is_winner: "blue",
      is_liked: false,
      is_winner: false,
    }
   ]

  likedArray = [];
  winnerArray = [];

  color = "";

  buttonColor = "blue";

  award_status = "Open";

  // awardToggle = () => {
  //   if (this.buttonColor === "black"){
  //     this.award_status = "Awarded";
  //   }
  //   else{
  //     this.award_status = "Unawarded";
  //   }
  // }
  

  thumbColor = (id, index) => {
    if ( this.leads[id].is_liked) {
      this.leads[id].is_liked = false;

    }
    else {
      this.leads[id].is_liked = true;
    }
    this.likedArray[index] = this.leads[id].is_liked ;
    console.log(this.likedArray[index]);
    console.log(this.winnerArray[index]);
  }

  awardExtend = (id, index) => {
    if(this.leads[id].is_winner){
      this.leads[id].is_winner = false;
    }
    else{
      this.leads[id].is_winner = true;
    }
    this.winnerArray[index] = this.leads[id].is_winner;
    console.log(this.winnerArray[index]);

  }


  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    for( var i =0; i < this.leads.length; i++){
      this.likedArray.push(false);
      this.winnerArray.push(false);
    }
  }

}

import { Component, Inject } from "@angular/core";

import {
  MAT_DIALOG_DATA
} from "@angular/material/dialog";

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html'
})

export class DialogContentExampleDialog {}