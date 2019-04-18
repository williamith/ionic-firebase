import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.page.html',
  styleUrls: ['./sponsors.page.scss'],
})
export class SponsorsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  viewAnnouncementsPage() {
    this.router.navigate(['app', 'announcements']);
  }
}
