import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Member } from './member';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  membership: string;
  member: Member;

  constructor(private db: AngularFirestore) { }

  createMember(member: Member): Promise<any>{
    return this.db.collection('members').add(member);
  }

  readMembers(): Observable<Member[]> {
    this.db.collection<Member>('members', ref => ref.where('membership', '==', 'Geek Trak'))
      .get().subscribe(response => {
        console.log(response);
      });
    return this.db.collection<Member>('members')
      .snapshotChanges()
      .pipe(
        map(actions => {
          return actions.map(action => {
            const member = action.payload.doc.data() as Member;
            return {
              id: action.payload.doc.id,
              firstName: member.firstName,
              lastName: member.lastName,
              email: member.email,
              phone: member.phone,
              membership: member.membership,
              address1: member.address1,
              address2: member.address2,
              city: member.city,
              state: member.state,
              zip: member.zip,
              title: member.title,
              company: member.company
            }
          });
        })
      );
  }

  deleteMember(id: string): Promise<any> {
    return this.db.doc(`members/${id}`).delete();
  }
}
