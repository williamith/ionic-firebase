import { MembersService } from './../services/members/members.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-members-list',
  templateUrl: './members-list.page.html',
  styleUrls: ['./members-list.page.scss'],
})
export class MembersListPage implements OnInit {
  membership: any;

  constructor(
    private membersService: MembersService,
    private router: Router
  ) { }

  ngOnInit() {
    this.membership = this.membersService.currentMembership;
    this.membersService.readMembers();
  }

  goBackToMembersPage() {
    this.router.navigate(['tabs/members']);
  }

  goToCreateMember() {
    this.router.navigate(['tabs/members/directory/create-member']);
  }

}
