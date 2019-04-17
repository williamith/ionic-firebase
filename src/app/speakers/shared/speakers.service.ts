import { Injectable } from '@angular/core';
import { Speaker } from './speaker';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpeakersService {
  url = 'https://gmisconference2019.firebaseio.com/speakers.json';
  speaker: Speaker;

  constructor(private http: HttpClient) { }

  getSpeakers(): Observable<Speaker[]> {
    return this.http.get<Speaker[]>(this.url);
  }
}