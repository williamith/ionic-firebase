import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from  "@angular/common/http";
import { MembersService } from '../services/members/members.service';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.page.html',
  styleUrls: ['./member-detail.page.scss'],
})
export class MemberDetailPage implements OnInit {
  member: any = {};
  url: string = 'https://gmisdatabase.firebaseio.com';

  constructor(
    private router: Router,
    private http: HttpClient,
    private membersService: MembersService
  ) { }

  ngOnInit() {
    this.member = this.membersService.currentMember;
  }

  goBackToMembersListPage() {
    this.router.navigate(['tabs/members/directory']);
  }

}
