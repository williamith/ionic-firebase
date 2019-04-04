import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { Member } from 'src/app/models/member';



@Injectable({
  providedIn: 'root'
})
export class MembersService {
  members = [];
  membersId: any;
  currentMembership: any;
  currentMember: any;
  currentMemberId: any;
  membersRef = this.db.list<Member>('Members');

  constructor(
    private http: HttpClient,
    public db: AngularFireDatabase
  ) {}

  getMembers() {
    return this.membersRef;
  }

  addMember(member: Member) {
    this.membersRef.push(member);
  }

  removeMember(member: Member) {
    return this.membersRef.remove(member.key);
  }
  
}
