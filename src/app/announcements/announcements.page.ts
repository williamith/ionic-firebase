import { AuthService } from './../login/shared/auth.service';
import { AnnouncementsService } from './shared/announcements.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-announcements',
  templateUrl: 'announcements.page.html',
  styleUrls: ['announcements.page.scss']
})
export class AnnouncementsPage implements OnInit {
  announcements = [];

  constructor(private announcementsService: AnnouncementsService , private authService: AuthService) { }

  ngOnInit() {
    this.announcementsService.getAnnouncements()
      .subscribe(
        response => this.announcements = Object.values(response),
        error => console.log(error),
        () => { this.announcements = this.announcements.sort(((a, b) => (a.date < b.date) ? 1 : ((b.date < a.date) ? -1 : 0))); }
      );
  }

  logout() {
    this.authService.logout();
  }
}
