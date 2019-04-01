import { MembersService } from './../services/members/members.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-members',
  templateUrl: './members.page.html',
  styleUrls: ['./members.page.scss'],
})
export class MembersPage implements OnInit {
  
  constructor(
    private membersService: MembersService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  goToMembersList(membership: any) {
    this.membersService.currentMembership = membership;
    this.router.navigate(['tabs/members/directory']);
  }

}