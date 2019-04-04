import { map } from 'rxjs/operators';
import { MembersService } from './../services/members/members.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { Member } from '../models/member';

@Component({
  selector: 'app-members-list',
  templateUrl: './members-list.page.html',
  styleUrls: ['./members-list.page.scss'],
})
export class MembersListPage implements OnInit {
  members$: Observable<Member[]>;
  membership: string;
  members: any;
  membersId: any;
  membersArray: Member[];

  observable: any;
  constructor(
    private router: Router,
    private membersService: MembersService,
    public db: AngularFireDatabase
  ) { }

  ngOnInit() {
    this.membership = this.membersService.currentMembership;

    this.members$ = this.membersService.membersRef.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.val() as Member;
          const id = a.payload.key;
          // this.membersArray.push({
          //   key?: a.payload.key,
          //   ['First Name']: string,
          //   ['Last Name']: string,
          //   ['Email']: string,
          //   ['Phone']: string,
          //   ['Membership']: string,
          //   ['Address Line 1']: string,
          //   ['Address Line 2']: string,
          //   ['City']: string,
          //   ['State']: string,
          //   ['Zip']: string,
          //   ['Title']: string,
          //   ['Company']: string;
          // })
          console.log(id + " " + Object.keys(data));
          return { id, ...data };
        });
      }));
  }

  // this.observable = this.membersService.membersRef.snapshotChanges();
  // this.observable.subscribe(response => {
  //   console.log(response);
  //   console.log(Object.keys(response));
  // });
  // this.members = this.membersService.members;
  // this.membersId = this.membersService.membersId;
  // console.log("From Members Page\n" + this.members);

  // this.members$ = this.membersService
  //   .readMembers()
  //   .snapshotChanges()
  //   .pipe(
  //     map(
  //       changes => {
  //         return changes.map(c => ({
  //           key: c.payload.key, ...c.payload.val()
  //         }))
  //       }
  //     )
  //   );
  // }

  // getKeys() {
  //   this.membersService.membersRef.snapshotChanges()
  //     .pipe(
  //       map(
  //         changes => {
  //           return changes.map(c => ({
  //             key: c.payload.key, ...c.payload.val()
  //           }))
  //         }
  //       )
  //     );
  // }

  goToCreateMember() {
    this.router.navigate(['tabs/members/directory/create-member']);
  }

  goToMemberDetailsPage(member: any, index: any) {
    this.membersService.currentMember = member;
    this.membersService.currentMemberId = member.key;
    this.router.navigate(['tabs/members/directory/member-detail']);
  }

}
