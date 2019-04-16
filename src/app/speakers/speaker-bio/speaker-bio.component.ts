import { SpeakersService } from './../shared/speakers.service';
import { Component, OnInit } from '@angular/core';
import { Speaker } from '../shared/speaker';

@Component({
  selector: 'app-speaker-bio',
  templateUrl: './speaker-bio.component.html',
  styleUrls: ['./speaker-bio.component.scss'],
})
export class SpeakerBioComponent implements OnInit {
  speaker: Speaker;

  constructor(private speakersService: SpeakersService) { }

  ngOnInit() {
    this.speaker = this.speakersService.speaker;
  }

}
