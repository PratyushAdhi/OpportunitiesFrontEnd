import { ConvertActionBindingResult } from '@angular/compiler/src/compiler_util/expression_converter';
import { NumberValueAccessor } from '@angular/forms';
import { Url } from 'url';
import { Contact } from './contact.model';
import { Lead } from './lead.model';
import {Genre} from './genre.model';
import { Language } from './language.model';

export class Detail {
    id: number; 
    lead_id: number;
    lead: Lead;
    event_title: string;
    partner_type: string;
    college_name: string;
    logo: string;
    about: string;
    website_url: string;
    facebook_url: string;
    twitter_url: string;
    instagram_url: string;
    youtube_url: string;
    contact_1: Contact;
    contact_2: Contact;
    opportunity_category: string;
    offering: string;
    number_of_artists: number;
    if_recurring: boolean;
    recurring_frequency: string;
    city: string;
    event_city: string; //add this to backend
    college_activity: string;
    college_music_contest: string;
    prize: string;
    genre_id: Genre [];
    language_id: Language[];
    budget: string;
    is_verified: boolean;
    is_published: boolean;
}
