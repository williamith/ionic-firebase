import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Event } from './event';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  event: Event;

  constructor(private db: AngularFirestore) { }

  createEvent(event: Event): Promise<any> {
    return this.db.collection('events').add(event);
  }

  readEvents(): Observable<Event[]> {
    return this.db.collection<Event>('events')
      .snapshotChanges()
      .pipe(
        map(actions => {
          return actions.map(action => {
            const event = action.payload.doc.data() as Event;
            return {
              id: event.id,
              name: event.name,
              startDateTime: event.startDateTime,
              endDateTime: event.endDateTime,
              location: event.location,
              membership: event.membership,
              note: event.note
            }
          });
        })
      );
  }

  deleteEvent(id: string): Promise<any> {
    return this.db.doc(`events/${id}`).delete();
  }
}
