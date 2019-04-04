import { Component, OnInit } from '@angular/core';
import { HttpClient } from  "@angular/common/http";
import { MembersService } from '../services/members/members.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.page.html',
  styleUrls: ['./member-detail.page.scss'],
})
export class MemberDetailPage implements OnInit {
  member: any = {};
  memberId: any;
  url: string = 'https://gmisdatabase.firebaseio.com';

  constructor(
    private router: Router,
    private http: HttpClient,
    private membersService: MembersService
  ) { }

  ngOnInit() {
    this.member = this.membersService.currentMember;
    this.memberId = this.membersService.currentMemberId;
    console.log(`From Member Detail Page: "${this.membersService.currentMember}`);
  }

  goToMemberEditPage() {
    this.router.navigate(['tabs/members/directory/member-edit']);
  }

}
