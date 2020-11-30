import { Component, OnInit } from '@angular/core';
import { fromEventPattern } from 'rxjs';
import { Business } from '../business.model';
import { Language } from '../language.model';
import { Lead } from '../lead.model';
import {Genre} from '../genre.model';
import { LeadsService } from '../leads.service';
@Component({
  selector: 'app-leadform',
  templateUrl: './leadform.component.html',
  styleUrls: ['./leadform.component.css']
})
export class LeadformComponent implements OnInit {
  
  businesses = [
    {
      id: 0, name: "Advertising/Media Agency", json_name: "agency"
    },
    {
      id:1, name: "Event Organizer", json_name: "organizer"
    },
    {
      id: 2, name: "Label", json_name: "label"
    },
    {
      id: 3, name: "Music Company", json_name: "music_company"
    },
    {
      id: 4, name: "TV Channel", json_name: "tv_channel"
    },
    {
      id: 5, name: "Radio Station", json_name: "radio_station"
    },
    {
      id: 6, name: "Publication", json_name: "publication"
    },
    {
      id: 7, name: "Streaming App", json_name: "streaming_app"
    },
    {
      id: 8, name: "Web/TV Series Producer", json_name: "series_producer"
    },
    {
      id: 9, name: "Film Producer", json_name: "film_producer"
    },
    {
      id: 10, name: "Artist Manager", json_name: "artist_manager"
    },
    {
      id: 11, name: "College", json_name: "college"
    },
    {
      id: 12, name: "Corporate Body", json_name: "corporate_body"
    },
    {
      id: 13, name: "Recording Studio", json_name: "recording_studio"
    },
    {
      id: 14, name: "Other", json_name: "other"
    }

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

  gigs = [
    {json_name: "corporate_gig", name: "Corporate Gig"},
    {json_name: "festival", name: "Festival"},
    {json_name: "private_function", name: "Private Function"}
  ]

  genres = [
    {name: "Rock", json_name:"rock"},
    {name: "Pop", json_name: "pop"},
    {name: "Sufi", json_name: 'sufi'},
  ]


  lead = new Lead();
  business_id = [];
  language_id= [];
  genre_id= [];

  temp_business=""
  temp_language=""
  temp_genre=""

  constructor(private api: LeadsService) { }

  ngOnInit(): void {
  }

  addBusiness(): void {
    for(var i = 0; i < this.temp_business.length; i++){
      var bus_obj = new Business ();
      bus_obj.name = this.temp_business[i];
      this.business_id.push(bus_obj);
      this.lead.business_id = this.business_id;
    }
  }

  addLanguage(): void {
    for(var i = 0; i < this.temp_language.length;i++){
      var lang_obj = new Language()
      lang_obj.name = this.temp_language[i];
      this.language_id.push(lang_obj);
      this.lead.language_id = this.language_id;
    }
  }

  addGenre(): void {
    for(var i = 0; i < this.temp_genre.length;i++){
      var gen_obj = new Genre()
      gen_obj.name = this.temp_genre[i];
      this.genre_id.push(gen_obj);
      this.lead.genre_id = this.genre_id;
    }
  }

  showOrganization() {
    return this.lead.partner_type === "organization"
  }

  showOrganizationOrIndividual(){
    return this.lead.partner_type === "organization" || this.lead.partner_type === "individual";  
  }

  notCollege(){
    return this.lead.partner_type !== "college";
  }

  showGigs(){
    return this.lead.activity === "gigs"
  }

  showCollege(){
    return this.lead.partner_type === "college"
  }

  showCollegeFestival(){
    return this.lead.college_activity === "college_festival"
  }

  showMusicContest(){
    return this.lead.college_activity === "music_contest"
  }


  onClickBtn(){
    console.log(JSON.stringify(this.lead));
    this.api.postLead(this.lead).subscribe(
      data => {
        this.lead = data;
      },
      error => {
        console.log(error);
      }
    )
  }

}
