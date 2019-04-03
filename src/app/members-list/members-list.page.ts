import { MembersService } from './../services/members/members.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-members-list',
  templateUrl: './members-list.page.html',
  styleUrls: ['./members-list.page.scss'],
})
export class MembersListPage implements OnInit {
  membership: string;
  members: any;
  membersId: any;
  dbRef = this.db.database.ref("Members");

  observable: any;
  constructor(
    private router: Router,
    private http: HttpClient,
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
  }

  getKeys() {
    this.dbRef.on('value', snapshot => {
      this.membersId = Object.keys(snapshot.val());
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
