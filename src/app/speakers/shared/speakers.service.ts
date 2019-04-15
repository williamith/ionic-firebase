import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Speaker } from './speaker';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpeakersService {
  url: string = 'https://gmisdatabase.firebaseio.io/Speakers.json';
  speaker: Speaker;

  constructor(private http: HttpClient) { }

  readSpeakers(): Observable<Speaker[]> {
    return this.http.get<Speaker[]>(this.url);
  }
}