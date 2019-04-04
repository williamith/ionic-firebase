import { MembersService } from './../services/members/members.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Component({
  selector: 'app-members-list',
  templateUrl: './members-list.page.html',
  styleUrls: ['./members-list.page.scss'],
})
export class MembersListPage implements OnInit {
  membership: string;
  members: any;
  membersId: any;

  observable: any;
  constructor(
    private router: Router,
    private membersService: MembersService,
    public db: AngularFireDatabase
  ) { }

  ngOnInit() {
    this.membership = this.membersService.currentMembership;

    this.observable = this.db.list("Members").valueChanges();
    this.observable.subscribe(response => {
      this.members = Object.values(response);
      this.getKeys();
    });
    this.members = this.membersService.members;
    this.membersId = this.membersService.membersId;
    console.log("From Members Page\n" + this.members);
  }

  getKeys() {
    this.membersService.membersRef.on('value', snapshot => {
      this.membersId = Object.keys(snapshot.val());
      console.log(this.membersId);
    });
  }

  goToCreateMember() {
    this.router.navigate(['tabs/members/directory/create-member']);
  }

  goToMemberDetailsPage(member: any, index: any) {
    this.membersService.currentMember = member;
    this.membersService.currentMemberId = this.membersId[index];
    this.router.navigate(['tabs/members/directory/member-detail']);
  }

}
