import { Component, OnInit } from '@angular/core';
import { SpeakersService } from './shared/speakers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.page.html',
  styleUrls: ['./speakers.page.scss'],
})
export class SpeakersPage implements OnInit {
  speakers = [];

  constructor(private speakersService: SpeakersService, private router: Router) {}

  ngOnInit() {
    this.speakersService.getSpeakers()
      .subscribe(
        response => this.speakers = Object.values(response),
        error => console.log(error)
      );
  }
}
