import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Member } from 'src/app/models/member';

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  members = [];
  membersId: any;
  selectedMembership: string;
  selectedMember: Member;
  selectedMemberId: any;
  membersRef = this.db.list('Members');

  constructor(public db: AngularFireDatabase) {}

  createMember(member: Member) {
    return this.membersRef.push(member);
  }

  readMembers() {
    return this.membersRef.query.orderByChild("Membership").equalTo(this.selectedMembership).on("value", function(snapshot) {
      console.log(Object.values(snapshot.val()));
    });
  }
  
  deleteMember(member: Member) {
    return this.membersRef.remove(member.key);
  }
}
