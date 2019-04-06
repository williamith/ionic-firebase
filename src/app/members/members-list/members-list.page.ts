import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Member } from './../shared/member';
import { MembersService } from '../shared/members.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-members-list',
  templateUrl: './members-list.page.html',
  styleUrls: ['./members-list.page.scss'],
})
export class MembersListPage implements OnInit {
  members: Observable<Member[]>;
  membership: string;

  constructor(private membersService: MembersService, private router: Router) {}

  ngOnInit() {
    this.membership = this.membersService.membership;
    this.members = this.membersService.readMembers();
  }

  viewCreateMemberPage() {
    this.router.navigate(['app/members/directory/new']);
  }

  viewMemberDetailsPage(member: Member) {
  this.membersService.member = member;
  this.router.navigate(['app/members/directory/member-detail']);
  }
}
