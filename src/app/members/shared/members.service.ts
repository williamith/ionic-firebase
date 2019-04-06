import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  members = [];
  membersId: any;
  membership: string;
  member: any;
  memberId: any;
  membersRef: any;

  constructor(private db: AngularFirestore) {}

  getMembers(): Observable<any[]>{
    return this.db.collection('members').valueChanges();
  }

  createMember(member: any) {
    return this.membersRef.push(member);
  }

  readMembers() {
    return this.membersRef.query.orderByChild('Membership').equalTo(this.membership).on('value', function(snapshot) {
      console.log(Object.values(snapshot.val()));
    });
  }
  
  deleteMember(member: any) {
    return this.membersRef.remove(member.key);
  }
}
