import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {Lead} from '../lead.model';
import {Language} from '../language.model';
import {Genre} from '../genre.model';
import {Business} from '../business.model';
import {LeadsService} from '../leads.service';

@Component({
  selector: 'app-leadretrieve',
  templateUrl: './leadretrieve.component.html',
  styleUrls: ['./leadretrieve.component.css']
})
export class LeadretrieveComponent implements OnInit {

  partner_types_list = [
    {name: 'Individual', json_name: "individual"},
    {name: 'Business', json_name: "organization"},
    {name: 'College', json_name: "college"},
    {name: 'Other', json_name: "other"}
  ];
  
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

  budgets = [
    {json_name: "upto_one_lac", name: "Upto Rs 1 L"},
    {json_name: "one_to_two_lac", name: "Rs 1L - 2L"},
    {json_name: "two_to_four_lac", name: "Rs 2L- 4L"},
    {json_name: "more_than_four_lac",name: "Rs 4L +"},
  ]


  lead = new Lead();
  business_id = [];
  language_id= [];
  genre_id= [];
  id: number;
  is_submitted = false;

  temp_business= []
  temp_language= []
  temp_genre= []

  constructor(private api: LeadsService, private ActivatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.ActivatedRoute.params.subscribe(
      params => {
        console.log(params["id"])
        this.id = params["id"]
      }
    )
    this.getLead(this.id);
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
    return (this.lead.partner_type != "college");
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
    this.is_submitted = true;
  }

  getLead = (id: number) => {
    this.api.getLead(this.id).subscribe(
      data => {
        console.log(data);
        this.lead = data;
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
        if(data["business_id"].length>0){
          var temp = []
          for(var i = 0; i < data["business_id"].length; i++){
            temp.push(data["business_id"][i].name)
          }
          this.temp_business = temp;
        }
        console.log(data["activity"])
        this.lead.activity = data["activity"]
      },
      error => {
        console.log(error);
      }
    )
  }

}
