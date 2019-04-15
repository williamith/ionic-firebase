import { Injectable } from '@angular/core';
import { Speaker } from './speaker';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpeakersService {
  url = 'https://gmisdatabase.firebaseio.com/speakers.json';

  constructor(private http: HttpClient) { }

  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(this.url);
  }
}