import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Speaker } from './speaker';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpeakersService {
  speaker: Speaker;

  constructor(private db: AngularFirestore) { }

  createSpeaker(speaker: Speaker): Promise<any> {
    return this.db.collection('speakers').add(speaker);
  }

  readSpeakers(): Observable<Speaker[]> {
    return this.db.collection<Speaker>('speakers')
      .snapshotChanges()
      .pipe(
        map(actions => {
          return actions.map(action => {
            const speaker = action.payload.doc.data() as Speaker;
            return {
              id: speaker.id,
              firstName: speaker.firstName,
              lastName: speaker.lastName,
              role: speaker.role,
              title: speaker.title,
              company: speaker.company,
              address1: speaker.address1,
              address2: speaker.address2,
              city: speaker.city,
              state: speaker.state,
              zip: speaker.zip,
              phone1: speaker.phone1,
              phone2: speaker.phone2,
              email: speaker.email,
              bio: speaker.bio,
              imageUrl: speaker.imageUrl
            }
          });
        })
      );
  }

  deleteSpeaker(id: string): Promise<any> {
    return this.db.doc(`speakers/${id}`).delete();
  }
}