import { Component, OnDestroy } from '@angular/core';
import { EventsService } from './shared/events.service';
import { SegmentChangeEventDetail } from '@ionic/core';
import { map, filter } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-events',
  templateUrl: 'events.page.html',
  styleUrls: ['events.page.scss']
})
export class EventsPage {
  events = [];
  filteredEvents = [];
  day = 'Sunday, April 28';

  constructor(private eventsService: EventsService) { }

  ngOnInit() {
    this.eventsService.getEvents()
      .subscribe(
        response => {
          this.events = Object.values(response);
          this.filteredEvents = Object.values(response);
        },
        error => console.log(error),
        () => {
          this.filteredEvents = this.events
            .filter(response => {
              let day: number = new Date(response.start).getDay();
              return day === 0;
            });
        }
      );


  }

  segmentChanged(event: any) {
    this.filteredEvents = this.events
      .filter(response => {
        let day: number = new Date(response.start).getDay();
        return day === parseInt(event.detail.value);
      });

    switch (event.detail.value) {
      case '0':
        this.day = 'Sunday, April 28';
        break;
      case '1':
        this.day = 'Monday, April 29';
        break;
      case '2':
        this.day = 'Tuesday, April 30';
        break;
      case '3':
        this.day = 'Wednesday, May 1';
        break;
      case '4':
        this.day = 'Thursday, May 2';
        break;
      default:
        break;
    }
  }
}