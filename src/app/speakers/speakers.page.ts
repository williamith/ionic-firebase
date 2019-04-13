import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Speaker } from './shared/speaker';
import { SpeakersService } from './shared/speakers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.page.html',
  styleUrls: ['./speakers.page.scss'],
})
export class SpeakersPage implements OnInit {
  speakers: Observable<Speaker[]>;

  constructor(private speakersService: SpeakersService, private router: Router) {}

  ngOnInit() {
    this.speakers = this.speakersService.readSpeakers();
  }
}
