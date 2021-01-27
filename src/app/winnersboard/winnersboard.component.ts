import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-winnersboard',
  templateUrl: './winnersboard.component.html',
  styleUrls: ['./winnersboard.component.css']
})
export class WinnersboardComponent implements OnInit {


  leads = [
    {
      id: 0, 
      image: "https://img.apmcdn.org/4f25ecdbbd7af5fed833153302515a94c990de11/uncropped/0a0f13-20130508-favorite-album-covers.jpg",
      title: "One",
      artist: "Artist",
      date: "23/12/2020",
      time: "8:00 PM",
    },
    {
      id: 1, 
      image: "https://img.apmcdn.org/4f25ecdbbd7af5fed833153302515a94c990de11/uncropped/0a0f13-20130508-favorite-album-covers.jpg",
      title: "One",
      artist: "Artist",
      date: "23/12/2020",
      time: "8:00 PM",
    },
    {
      id: 2, 
      image: "https://img.apmcdn.org/4f25ecdbbd7af5fed833153302515a94c990de11/uncropped/0a0f13-20130508-favorite-album-covers.jpg",
      title: "One",
      artist: "Artist",
      date: "23/12/2020",
      time: "8:00 PM",
    },
   ]
   
  constructor() { }

  ngOnInit(): void {
  }

}
