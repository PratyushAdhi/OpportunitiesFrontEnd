import {Business} from './business.model';
import { Genre } from './genre.model';
import { Language } from './language.model';
export class Lead {
    business_id: Business [];
    genre_id: Genre [];
    language_id: Language [];
    activity: string;
    phone_no: number;
    event_title: string;
    name: string;
    email: string;
    city: string;
    org_name: string;
    partner_type: string;
    college_activity: string;
    college_music_contest: string;
    college_name: string;
    budget: string;
    prize: string;
    other: string;
    gig_type: string;
    date_of_event: Date;
    event_city: string;
}
