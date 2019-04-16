import { SpeakerBioComponent } from './speaker-bio/speaker-bio.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SpeakersPage } from './speakers.page';

const routes: Routes = [
  {
    path: 'speaker-bio',
    component: SpeakerBioComponent
  },
  {
    path: '',
    component: SpeakersPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    SpeakersPage,
    SpeakerBioComponent
  ]
})
export class SpeakersPageModule {}
