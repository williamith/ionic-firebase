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

  constructor(private eventsService: EventsService) { }

  ngOnInit() {
    this.eventsService.getEvents()
      .subscribe(
        response => {
          this.events = Object.values(response);
          this.filteredEvents = Object.values(response);
        },
        error => console.log(error)
      );
  }

  segmentChanged(event: any) {
    this.filteredEvents = this.events
      .filter(response => {
        let day: number = new Date(response.start).getDay();
        return day === parseInt(event.detail.value);
      });
  }
}