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
    this.eventsService.getEvents().subscribe(
      response => {
        this.events = response;
        this.filteredEvents = response;
      },
      error => console.log(error)
    );

    console.log(this.filteredEvents);
  }

  segmentChanged(event: any) {
    console.log(event.detail.value);
  }
}