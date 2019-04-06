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
  memberId: any;

  constructor(private router: Router, private membersService: MembersService) {}

  ngOnInit() {
    this.member = this.membersService.selectedMember
    console.log(`From Member Detail Page: ${this.membersService.selectedMember.key.toString()}`);
  }

  goToMemberEditPage() {
    this.router.navigate(['tabs/members/directory/member-edit']);
  }

}
