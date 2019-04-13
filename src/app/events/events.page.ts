import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from './shared/event';
import { EventsService } from './shared/events.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: 'events.page.html',
  styleUrls: ['events.page.scss']
})
export class EventsPage {
  events: Observable<Event[]>;

  constructor(private eventsService: EventsService, private router: Router) {}

  ngOnInit() {
    this.events = this.eventsService.readEvents();
  }

  viewEventDetailsPage(event: Event) {
  this.eventsService.event = event;
  this.router.navigate(['app/events/event-detail']);
  }
}
