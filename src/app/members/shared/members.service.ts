import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Member } from 'src/app/members/shared/member';

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  members = [];
  membersId: any;
  membership: string;
  member: Member;
  memberId: any;
  membersRef: any;

  constructor(public db: AngularFirestore) {}

  createMember(member: Member) {
    return this.membersRef.push(member);
  }

  readMembers() {
    return this.membersRef.query.orderByChild("Membership").equalTo(this.membership).on("value", function(snapshot) {
      console.log(Object.values(snapshot.val()));
    });
  }
  
  deleteMember(member: Member) {
    return this.membersRef.remove(member.key);
  }
}
