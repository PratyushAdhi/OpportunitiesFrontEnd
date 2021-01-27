import { ConvertActionBindingResult } from '@angular/compiler/src/compiler_util/expression_converter';
import { NumberValueAccessor } from '@angular/forms';
import { URL, Url } from 'url';
import { Contact } from './contact.model';
import { Lead } from './lead.model';
import {Genre} from './genre.model';
import { Language } from './language.model';

export class Detail {
    id: number;                  
    org_name                : String;
    partner_type            : String;
    other_partner_type     : String;
    facebook_url            : String;
    instagram_url         : String;
    information             : String;
    logo                    : File;
    primary_contact_name    : String;
    primary_contact_email   : String;
    primary_contact_phone   : String;
    secondary_contact_name  : String;
    secondary_contact_email : String;
    secondary_contact_phone : String;
    category                : String;;
    artist_info            : String;
    other_benefits          : String;
    language_id             :  Language [];
    genre_id                :  Genre [];
    terms_conditions       : String;
    date                    : Date;
    video                   : String;
    recurring_frequency: String;     
    other_recurring: String;         
    gallery: File [];
    no_of_artists: number;
}
