import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  members: any;
  membersId: any;
  currentMembership: any;
  currentMember: any;
  currentMemberId: any;
  membersDbReference = this.db.database.ref("Members");

  url: string = 'https://gmisdatabase.firebaseio.com';

  constructor(
    private http: HttpClient,
    public db: AngularFireDatabase
    ) {}

  
}
