import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  members = [];
  membersId: any;
  currentMembership: any;
  currentMember: any;
  currentMemberId: any;
  membersRef = this.db.database.ref("Members");

  constructor(
    private http: HttpClient,
    public db: AngularFireDatabase
  ) {}

}
