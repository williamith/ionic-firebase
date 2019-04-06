import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MembersService } from './shared/members.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.page.html',
  styleUrls: ['./members.page.scss'],
})
export class MembersPage implements OnInit {
  constructor(private membersService: MembersService, private router: Router) {}

  ngOnInit() {}

  goToMembersList(membership: string) {
    this.membersService.membership = membership;
    this.router.navigateByUrl('/directory');
  }
}