import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MembersService } from '../shared/members.service';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.page.html',
  styleUrls: ['./member-detail.page.scss'],
})
export class MemberDetailPage implements OnInit {
  member: any;

  constructor(private membersService: MembersService, private router: Router, ) {}

  ngOnInit() {
    this.member = this.membersService.member;
  }

  viewMemberEditPage() {
    this.router.navigateByUrl('app/members/directory/member-edit');
  }

}
