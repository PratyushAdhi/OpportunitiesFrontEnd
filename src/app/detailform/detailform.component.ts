import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { Detail } from '../detail.model';
import { Genre } from '../genre.model';
import { Language } from '../language.model';
import {DetailserviceService} from '../detailservice.service';

@Component({
  selector: 'app-detailform',
  templateUrl: './detailform.component.html',
  styleUrls: ['./detailform.component.css']
})
export class DetailformComponent implements OnInit {

  languages = [
    {json_name: "assamese",name: "Assamese", id: 0},
    {json_name: "bengali", name: "Bengali", id: 1},
    {json_name: "bodo", name: "Bodo", id: 2},
    {json_name: "dogri", name: "Dogri", id: 3},
    {json_name: "gujrati",name: "Gujarati",id: 4},
    {json_name: "hindi", name: "Hindi", id:5},
    {json_name: "kannada", name: "Kannada", id:6},
    {json_name: "kashmiri", name: "Kashmiri", id: 7},
    {json_name: "konkani",name: "Konkani", id: 8},
    {json_name: "malayalam", name: "Malayalam", id:9},
    {json_name: "manipuri", name: "Manipuri", id: 10},
    {json_name: "marathi",name: "Marathi", id: 11},
    {json_name: "maithili", name: "Maithili", id: 12},
    {json_name: "nepali", name: "Nepali", id: 13},
    {json_name: "oriya",name: "Oriya", id: 14},
    {json_name: "punjabi",name: "Punjabi", id: 15},
    {json_name: "sanskrit",name: "Sanskrit", id: 16},
    {json_name: "santhali",name: "Santhali", id: 17},
    {json_name: "sindhi",name: "Sindhi", id: 18},
    {json_name: "tamil",name: "Tamil", id: 19},
    {json_name: "telugu", name: "Telugu", id: 20},
    {json_name: "urdu",name: "Urdu", id: 21}
  ]

  genres = [
    {name: "Rock", json_name:"rock"},
    {name: "Pop", json_name: "pop"},
    {name: "Sufi", json_name: 'sufi'},
  ]

  budgets = [
    {json_name: "upto_one_lac", name: "Upto Rs 1 L"},
    {json_name: "one_to_two_lac", name: "Rs 1L - 2L"},
    {json_name: "two_to_four_lac", name: "Rs 2L- 4L"},
    {json_name: "more_than_four_lac",name: "Rs 4L +"},
  ]

  frequency = [
    {json_name:"month", name: "Monthly"},
    {json_name: "quarter", name: "Quarterly"},
    {json_name: "six_months", name: "Six Months"},
    {json_name: "yearly", name: "Yearly"}
  ]

  activities = [
    {
      id: 0, name: "Record Deals", json_name: "record_deal"     
    },
    {
      id: 1, name: "Artist Management", json_name: "artist_management"
    },
    {
      id: 2, name: "Music Production", json_name: "music_production"
    },
    {
      id: 3, name: "Influencer Marketing", json_name: "influencer_marketing"
    },
    {
      id: 4, name: "Colaboration", json_name: "collaboration"
    },
    {
      id: 5, name: "Licensing for Retail Outlets", json_name: "retail_outlets"
    },
    {
      id: 6, name: "Licensing for Series Or Films", json_name: "series_or_film"
    },
    {
      id: 7, name: "Radio Or Platforms", json_name: "radio_or_platforms"
    },
    {
      id: 8, name: "Book Artists/ Bands For Gigs", json_name: "gigs"
    },
    {
      id: 9, name: "Music Videos For Broadcast", json_name: "broadcast"
    }
  ]

  college_music_contest = [
    {
      id: 0, name: "Battle Of Bands (Hindi)", json_name: "battle_band_hindi"
    },
    {
      id: 1, name: "Battle Of Bands (English)", json_name: "battle_band_english"
    },
    {
      id: 2, name: "Solo Singing Contest", json_name:"solo_singing"
    },
    {
      id:3, name: "Others", json_name: "others"
    }
  ]

  college_activities = [
    {
      id: 0, name: "Music Contests/Battle For Bands During College Festival", json_name: "music_contest"
    },
    {
      id: 1, name: "Artists/Bands For Music Events", json_name: "college_festival"
    }
  ]


  detail = new Detail();
  id: number;
  status_type= "company";
  temp_genre = []
  temp_language = []
  language_id = []
  genre_id = []
  urls = []
  temp_logo: File;
  show_urls = []
  show_logo = "";
  recurring = "no";
  constructor(public ActivatedRoute: ActivatedRoute, public api: DetailserviceService) {}

  ngOnInit(): void {
    this.ActivatedRoute.params.subscribe(
      params => {
        console.log(params["id"])
        this.id = params["id"]
      }
    )
    this.getDetail(this.id);
    }

  addLanguage(): void {
    for(var i = 0; i < this.temp_language.length; i++){
      var lang_obj = new Language();
      lang_obj.name = this.temp_language[i];
      this.language_id.push(lang_obj);
      this.detail.language_id=this.language_id;
    }
  }

  addGenre(): void {
    for(var i = 0; i < this.temp_genre.length; i++){
      var gen_obj = new Genre();
      gen_obj.name = this.temp_genre[i];
      this.genre_id.push(gen_obj);
      this.detail.genre_id = this.genre_id;
    }
  }

  onClickBtn(): void{
    this.api.updateDetail(this.detail, this.temp_logo, this.urls, this.id).subscribe(
      data =>{
        console.log(data);
        this.status_type = "submitted";
      },
      error => {
        console.log(error);
      }
    );
  }

  onNextBtn(){
    this.api.updateDetail(this.detail, this.temp_logo, this.urls, this.id).subscribe(
      data =>{
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
    this.status_type = "opportunity";

  }

  uploadFileToGallery(e) {
    if(e.target.files){
      for(var i = 0; i < e.target.files.length; i++){
          var reader = new FileReader();
          reader.readAsDataURL(e.target.files[i]);
          reader.onload=(events:any)=>{
            this.show_urls.push(events.target.result);
        }
        this.urls.push(e.target.files[i]);
      }
    }
    console.log(this.show_urls);
    console.log(this.urls);
  }


  uploadFileToLogo(e) {
    if(e.target.files){
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload=(events:any)=>{
        this.show_logo = events.target.results;
      }
      this.temp_logo = e.target.files[0];
  }
}

  getDetail = (id: number) => {
    this.api.getDetail(this.id).subscribe(
      data => {
        this.detail = data;
        if(data["language_id"].length > 0){
          var temp = []
          for(var i = 0; i < data["language_id"].length; i++){
            temp.push(data["language_id"][i].name)
          }
          this.temp_language = temp;
        }
        if(data["genre_id"].length > 0){
          var gen = []
          for(var i = 0; i < data["genre_id"].length; i++){
            gen.push(data["genre_id"][i].name)
          }
          this.temp_genre = gen;
        }
        this.detail.recurring_frequency = data["recurring_frequency"];
      },
      error => {
        console.log(error);
      }
    )
  }

}
