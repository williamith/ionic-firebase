import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  currentMembership: any;
  currentMember: any;
  url: string = 'https://gmisdatabase.firebaseio.com';
  members: any;

  constructor(private http: HttpClient) {}

}
